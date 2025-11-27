import React, { createContext, useContext, useState, useEffect } from 'react';

export const SUPPORTED_CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  CNY: { symbol: '¥', name: 'Chinese Yuan' },
  KRW: { symbol: '₩', name: 'Korean Won' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham' },
};

interface CurrencyContextType {
  currency: string;
  setCurrency: (curr: string) => void;
  convertPrice: (price: number, fromCurrency: string) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<string>('USD');

  useEffect(() => {
    // Auto-detect currency from IP geolocation (simplified)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const countryCurrency: Record<string, string> = {
          US: 'USD', IN: 'INR', GB: 'GBP', JP: 'JPY', CN: 'CNY', KR: 'KRW',
          AU: 'AUD', CA: 'CAD', AE: 'AED', DE: 'EUR', FR: 'EUR', ES: 'EUR'
        };
        const detected = countryCurrency[data.country_code] || 'USD';
        setCurrency(detected);
      })
      .catch(() => setCurrency('USD'));
  }, []);

  const convertPrice = (price: number, fromCurrency: string): number => {
    // Simplified conversion rates (in production, use live API)
    const rates: Record<string, number> = {
      USD: 1, EUR: 0.92, GBP: 0.79, INR: 83, JPY: 149,
      CNY: 7.2, KRW: 1320, AUD: 1.52, CAD: 1.36, AED: 3.67
    };

    const usdPrice = price / (rates[fromCurrency] || 1);
    return usdPrice * (rates[currency] || 1);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
};