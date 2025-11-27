
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();
  const [searchType, setSearchType] = useState('flights');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ...formData,
      passengers: formData.passengers.toString(),
    });
    router.push(`/search?type=${searchType}&${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Search Type Tabs */}
      <div className="flex space-x-4 border-b">
        <button
          type="button"
          onClick={() => setSearchType('flights')}
          className={`pb-2 px-4 ${
            searchType === 'flights'
              ? 'border-b-2 border-primary-600 text-primary-600 font-semibold'
              : 'text-gray-600'
          }`}
        >
          ✈️ Flights
        </button>
        <button
          type="button"
          onClick={() => setSearchType('hotels')}
          className={`pb-2 px-4 ${
            searchType === 'hotels'
              ? 'border-b-2 border-primary-600 text-primary-600 font-semibold'
              : 'text-gray-600'
          }`}
        >
          🏨 Hotels
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <input
            type="text"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            placeholder="Mumbai"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <input
            type="text"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            placeholder="Dubai"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Depart Date
          </label>
          <input
            type="date"
            value={formData.departDate}
            onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return Date
          </label>
          <input
            type="date"
            value={formData.returnDate}
            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
      >
        🔍 Search {searchType === 'flights' ? 'Flights' : 'Hotels'}
      </button>
    </form>
  );
}
