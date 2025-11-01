import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/AboutSection';
import Clients from './components/ClientsSection';
import Contact from './components/ContactSection';
import Footer from './components/FooterSection';
import ServicesPage from './components/ServicesPage';
import ScrollToTop from './components/ScrollToTop'; // Add this
import './globals.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <HeroSection />
            <About />
            <Clients />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;