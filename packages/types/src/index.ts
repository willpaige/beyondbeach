/** Holiday category types */
export type HolidayCategory = 'clubs' | 'sailing' | 'mountains' | 'ski';

/** Destination */
export type Destination = {
  id: string;
  name: string;
  country: 'Greece' | 'Portugal' | 'France';
  region?: string;
  slug: string;
  lat: number;
  lng: number;
  image?: string;
};

/** Holiday product */
export type Holiday = {
  id: string;
  title: string;
  slug: string;
  category: HolidayCategory;
  destinationId: string;
  description: string;
  priceFrom: number;
  wasPrice?: number;
  duration: string;
  season: 'summer' | 'winter' | 'both';
  images: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
};

/** Booking */
export type Booking = {
  id: string;
  userId: string;
  holidayId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  roomType: string;
  departureAirport: string;
  status: 'enquiry' | 'confirmed' | 'paid' | 'cancelled';
  totalPrice: number;
  createdAt: string;
};

/** User / Guest */
export type User = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'guest' | 'staff' | 'admin';
};

/** Review */
export type Review = {
  id: string;
  holidayId: string;
  userId: string;
  rating: number;
  text: string;
  date: string;
  categories?: {
    activities?: number;
    location?: number;
    accommodation?: number;
    staff?: number;
    value?: number;
  };
};

/** Blog post */
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
};

/** Deal / Offer */
export type Deal = {
  id: string;
  holidayId: string;
  badgeText: string;
  offerText: string;
  wasPrice: number;
  nowPrice: number;
  saveAmount: number;
  validUntil?: string;
};
