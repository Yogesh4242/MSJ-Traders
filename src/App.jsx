'use client';
import SnowEffect from "./components/Snoweffect";
import React from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/AboutSection';
import Clients from './components/ClientsSection';
import ServiceSection from "./components/ServiceSection";
import Contact from './components/ContactSection';
import Footer from './components/FooterSection';
import ServicesPage from './components/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import Whatsappbutton from './components/WhatsAppButton';
import './globals.css';

/* 🧠 Main Home Page Layout (Shared for SSR & CSR) */
const AppContent = () => (
  <>
    <Navigation />
    <HeroSection />
    <About />
    <Clients />
    <ServiceSection/>
    <Contact />
    <Footer />
    <Whatsappbutton/>
    
  </>
);

const App = () => {
  // 🚫 On server: Use MemoryRouter (keeps build safe)
  // 🚀 On browser: Use BrowserRouter (full routing)
  const Router = typeof window === 'undefined' ? MemoryRouter : BrowserRouter;

  return (
    <Router>
      {/* 🔹 Only run ScrollToTop in Browser (no window/document on SSR) */}
      {typeof window !== 'undefined' && <ScrollToTop />}
        <Whatsappbutton />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;





/* Thinkpad-log */
