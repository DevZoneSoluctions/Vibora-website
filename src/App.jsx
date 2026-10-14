import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TaglineSection from './components/TaglineSection';
import FeatureDark from './components/FeatureDark';
import FeatureLight from './components/FeatureLight';
import ComparisonSection from './components/ComparisonSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ChildSafety from './pages/ChildSafety';
import CustomCursor from './components/CustomCursor';
import ScrollDownButton from './components/ScrollDownButton';

/* ── Global styles injected once ───────────────────────── */
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    html, body {
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      background: #0a0620;
      color: #f5ede0;
      font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
      -webkit-text-size-adjust: 100%;
    }
    /* Touch optimization for mobile & tablet */
    @media (hover: none) or (pointer: coarse) {
      * {
        -webkit-tap-highlight-color: transparent;
      }
      .magnetic-item {
        transform: none !important;
      }
    }
    /* Short screen height optimization */
    @media (max-height: 700px) {
      .min-h-screen {
        min-height: 100svh;
      }
    }
    /* Smooth magnetic spring transition */
    .magnetic-item {
      transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
      will-change: transform;
    }
    .font-outfit   { font-family: 'Outfit', sans-serif; }
    .font-caveat   { font-family: 'Caveat', cursive; }
    .font-satisfy  { font-family: 'Satisfy', cursive; }
    .font-playfair { font-family: 'Playfair Display', serif; }
  `}} />
);

/* ── Home (landing) page ────────────────────────────────── */
function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div
        className={`min-h-screen bg-[#0a0620] text-[#f5ede0] font-sans selection:bg-[#ec4899]/30 selection:text-white overflow-x-hidden transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main>
          <HeroSection />
          <TaglineSection />
          <FeatureDark />
          <FeatureLight />
          <ComparisonSection />
          <StatsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

/* ── Auto-scroll to top or target hash on route change ──── */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

/* ── Root App with Router ───────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <CustomCursor />
      <ScrollDownButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/child-safety" element={<ChildSafety />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
