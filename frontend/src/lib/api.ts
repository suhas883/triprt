import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.triprt.com';

export interface FlightSearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  passengers: number;
}

export interface FlightResult {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  currency: string;
  duration: string;
  stops: number;
  source: string;
  bookingUrl: string;
  isAffiliate: boolean;
}

export async function searchFlights(params: FlightSearchParams): Promise<FlightResult[]> {
  try {
    const response = await axios.post(`${API_URL}/api/search/flights`, params);
    return response.data;
  } catch (error) {
    console.error('Flight search error:', error);
    // Return mock data as fallback
    return getMockFlights(params);
  }
}

export async function searchHotels(params: any): Promise<any[]> {
  try {
    const response = await axios.post(`${API_URL}/api/search/hotels`, params);
    return response.data;
  } catch (error) {
    console.error('Hotel search error:', error);
    return [];
  }
}

export async function createPriceAlert(data: {
  email: string;
  phone?: string;
  route: string;
  targetPrice: number;
}): Promise<boolean> {
  try {
    await axios.post(`${API_URL}/api/alerts`, data);
    return true;
  } catch (error) {
    console.error('Alert creation error:', error);
    return false;
  }
}

// Mock data for testing
function getMockFlights(params: FlightSearchParams): FlightResult[] {
  return [
    {
      id: '1',
      airline: 'Air India',
      departure: params.from,
      arrival: params.to,
      price: 15000,
      currency: 'INR',
      duration: '3h 30m',
      stops: 0,
      source: 'Aviasales',
      bookingUrl: 'https://www.aviasales.com',
      isAffiliate: true,
    },
    {
      id: '2',
      airline: 'IndiGo',
      departure: params.from,
      arrival: params.to,
      price: 12500,
      currency: 'INR',
      duration: '3h 45m',
      stops: 0,
      source: 'Rakuten Travel',
      bookingUrl: 'https://travel.rakuten.co.jp',
      isAffiliate: false,
    },
  ];
}
