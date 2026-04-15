/**
 * GoKyte / Kyte Airline Distribution API client.
 * Connects to EasyJet, Ryanair, BA and other carriers via a single integration.
 * Used by the API layer for flight search, hold and confirmation.
 */

type KyteConfig = {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
};

export type FlightSearchQuery = {
  origin: string;        // IATA code e.g. 'LGW'
  destination: string;   // IATA code e.g. 'EFL' (Kefalonia)
  departureDate: string; // YYYY-MM-DD
  returnDate?: string;
  adults: number;
  children?: number;
  infants?: number;
};

export type FlightResult = {
  id: string;
  carrier: string;
  carrierName: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  pricePerPerson: number;
  totalPrice: number;
  seatsAvailable: number;
  cabinClass: string;
};

export type FlightHold = {
  holdId: string;
  expiresAt: string;
  flights: FlightResult[];
  totalPrice: number;
};

export type FlightConfirmation = {
  confirmationId: string;
  pnr: string;
  status: 'confirmed' | 'pending' | 'failed';
  flights: FlightResult[];
  totalPrice: number;
};

export class KyteClient {
  private config: KyteConfig;

  constructor(config: KyteConfig) {
    this.config = config;
  }

  private async fetch<T>(path: string, opts?: RequestInit): Promise<T> {
    const res = await fetch(`${this.config.baseUrl}${path}`, {
      ...opts,
      headers: {
        'X-Api-Key': this.config.apiKey,
        'X-Api-Secret': this.config.apiSecret,
        'Content-Type': 'application/json',
        ...opts?.headers,
      },
    });
    if (!res.ok) throw new Error(`Kyte API error: ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search available flights */
  async searchFlights(query: FlightSearchQuery): Promise<FlightResult[]> {
    // TODO: Map to actual Kyte API request shape
    return this.fetch<FlightResult[]>('/flights/search', {
      method: 'POST',
      body: JSON.stringify(query),
    });
  }

  /** Place a temporary hold on selected flights */
  async holdFlights(flightIds: string[], passengers: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    type: 'adult' | 'child' | 'infant';
  }[]): Promise<FlightHold> {
    return this.fetch<FlightHold>('/flights/hold', {
      method: 'POST',
      body: JSON.stringify({ flightIds, passengers }),
    });
  }

  /** Confirm and pay for held flights */
  async confirmFlights(holdId: string, payment: {
    token: string; // Stripe payment token
  }): Promise<FlightConfirmation> {
    return this.fetch<FlightConfirmation>('/flights/confirm', {
      method: 'POST',
      body: JSON.stringify({ holdId, payment }),
    });
  }

  /** Get flight status for a confirmed booking */
  async getFlightStatus(confirmationId: string): Promise<FlightConfirmation> {
    return this.fetch<FlightConfirmation>(`/flights/${confirmationId}`);
  }

  /** Cancel a held or confirmed flight */
  async cancelFlight(id: string): Promise<{ success: boolean; refundAmount?: number }> {
    return this.fetch('/flights/cancel', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
  }
}

/** Create a Kyte client from env vars */
export function createKyteClient(): KyteClient {
  return new KyteClient({
    apiKey: process.env.KYTE_API_KEY || '',
    apiSecret: process.env.KYTE_API_SECRET || '',
    baseUrl: process.env.KYTE_API_URL || 'https://api.gokyte.com/v1',
  });
}
