import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 }); // 1 hour cache

export const searchFlights = async (searchData: any) => {
  const cacheKey = `flight-${searchData.from}-${searchData.to}-${searchData.departDate}`;

  // Check cache first
  const cached = cache.get(cacheKey);
  if (cached) {
    console.log('✅ Returning cached results');
    return cached;
  }

  try {
    // PRIMARY: Perplexity Sonar Pro
    const perplexityResults = await searchWithPerplexity(searchData);

    // Parse with OpenAI
    const parsedResults = await parseWithOpenAI(perplexityResults, searchData);

    // FALLBACK: Aviasales API
    const aviasalesResults = await searchAviasales(searchData);

    // Merge and sort by price
    const allResults = [...parsedResults, ...aviasalesResults]
      .sort((a, b) => a.price - b.price)
      .slice(0, 20); // Top 20 results

    // Cache results
    cache.set(cacheKey, allResults);

    return allResults;
  } catch (error) {
    console.error('Search error:', error);
    // Return Aviasales only as fallback
    return await searchAviasales(searchData);
  }
};

const searchWithPerplexity = async (searchData: any) => {
  const query = `Find cheapest flights from ${searchData.from} to ${searchData.to} on ${searchData.departDate}. 
    Search Japanese sites (skyticket.jp, rakuten.co.jp), Korean sites (naver.com), Chinese sites (ctrip.com), 
    and global sites. Include prices in original currency, airline names, and booking URLs.`;

  const response = await axios.post(
    'https://api.perplexity.ai/chat/completions',
    {
      model: 'sonar-pro',
      messages: [{ role: 'user', content: query }],
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content;
};

const parseWithOpenAI = async (perplexityResults: string, searchData: any) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Extract flight information and return as JSON array with fields: airline, departure, arrival, price, currency, duration, stops, source, bookingUrl',
        },
        {
          role: 'user',
          content: perplexityResults,
        },
      ],
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const content = response.data.choices[0].message.content;
  try {
    return JSON.parse(content);
  } catch {
    return [];
  }
};

const searchAviasales = async (searchData: any) => {
  // Aviasales API integration
  // Add your Aviasales API implementation here
  return [];
};

export const searchHotels = async (searchData: any) => {
  // Similar implementation for hotels
  return [];
};