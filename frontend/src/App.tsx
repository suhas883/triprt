import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AlertsPage from './pages/AlertsPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flights" element={<FlightsPage />} />
                <Route path="/hotels" element={<HotelsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App;