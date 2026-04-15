/**
 * Checkfront API v3 client for BeyondBeach.
 * Handles availability queries, booking sessions, and booking creation.
 */

type CheckfrontConfig = {
  host: string;
  apiKey: string;
  apiSecret: string;
};

type AvailabilityQuery = {
  startDate: string;  // YYYY-MM-DD
  endDate: string;
  itemId?: string;
  guests?: { adults: number; children?: number };
};

type AvailabilityResult = {
  itemId: string;
  available: boolean;
  rate: number;
  slip: string;       // booking SLIP token
  spotsLeft?: number;
};

type CalendarDay = {
  date: string;
  available: boolean;
  rate?: number;
};

export class CheckfrontClient {
  private host: string;
  private credentials: string;

  constructor(config: CheckfrontConfig) {
    this.host = config.host;
    this.credentials = Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString('base64');
  }

  private async fetch<T>(path: string, opts?: RequestInit): Promise<T> {
    const res = await fetch(`https://${this.host}/api/3.0${path}`, {
      ...opts,
      headers: {
        Authorization: `Basic ${this.credentials}`,
        'Content-Type': 'application/json',
        ...opts?.headers,
      },
    });
    if (!res.ok) throw new Error(`Checkfront API error: ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Query availability for an item with dates and guests */
  async getAvailability(query: AvailabilityQuery): Promise<AvailabilityResult[]> {
    const params = new URLSearchParams({
      start_date: query.startDate,
      end_date: query.endDate,
      ...(query.itemId && { item_id: query.itemId }),
      ...(query.guests && { 'param[adults]': String(query.guests.adults) }),
      ...(query.guests?.children && { 'param[children]': String(query.guests.children) }),
    });
    const data = await this.fetch<{ items: Record<string, unknown> }>(`/item?${params}`);
    // Transform to our type — actual shape depends on Checkfront response
    return Object.values(data.items || {}) as AvailabilityResult[];
  }

  /** Get calendar availability for an item over a date range */
  async getCalendar(itemId: string, startDate: string, endDate: string): Promise<CalendarDay[]> {
    const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
    const data = await this.fetch<{ days: Record<string, unknown> }>(`/item/${itemId}/cal?${params}`);
    return Object.entries(data.days || {}).map(([date, info]) => ({
      date,
      available: (info as { available: boolean }).available,
      rate: (info as { rate?: number }).rate,
    }));
  }

  /** Find nearest available dates when requested dates are full */
  async findNearestAvailable(itemId: string, targetDate: string, rangeDays = 28): Promise<CalendarDay[]> {
    const start = new Date(targetDate);
    const searchStart = new Date(start.getTime() - rangeDays * 86400000);
    const searchEnd = new Date(start.getTime() + rangeDays * 86400000);
    const calendar = await this.getCalendar(
      itemId,
      searchStart.toISOString().split('T')[0],
      searchEnd.toISOString().split('T')[0],
    );
    return calendar.filter((d) => d.available);
  }

  /** Create a booking session (add items to cart) */
  async createSession(slip: string): Promise<{ sessionId: string }> {
    const data = await this.fetch<{ booking: { session: { id: string } } }>('/booking/session', {
      method: 'POST',
      body: JSON.stringify({ slip }),
    });
    return { sessionId: data.booking.session.id };
  }

  /** Finalise a booking from a session */
  async createBooking(sessionId: string, customer: {
    name: string;
    email: string;
    phone?: string;
  }): Promise<{ bookingId: string }> {
    const data = await this.fetch<{ booking: { id: string } }>('/booking/create', {
      method: 'POST',
      body: JSON.stringify({
        session_id: sessionId,
        ...customer,
      }),
    });
    return { bookingId: data.booking.id };
  }
}

/** Create a Checkfront client from env vars */
export function createCheckfrontClient(): CheckfrontClient {
  return new CheckfrontClient({
    host: process.env.CHECKFRONT_API_HOST || '',
    apiKey: process.env.CHECKFRONT_API_KEY || '',
    apiSecret: process.env.CHECKFRONT_API_SECRET || '',
  });
}
