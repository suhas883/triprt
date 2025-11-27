import express from 'express';
import { searchFlights, searchHotels } from '../services/searchService';

const router = express.Router();

router.post('/flights', async (req, res) => {
  try {
    const results = await searchFlights(req.body);
    res.json({ success: true, flights: results });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/hotels', async (req, res) => {
  try {
    const results = await searchHotels(req.body);
    res.json({ success: true, hotels: results });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;