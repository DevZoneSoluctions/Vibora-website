import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/**
 * Universal Scroll Down / Smart Scroll Button
 * - Appears on all pages of the website
 * - Features circular SVG progress indicator showing page scroll depth
 * - One-click smooth scroll down to explore sections
 * - When reaching page bottom, dynamically transitions to "Back to Top"
 * - Styled with Vibora's signature neon glassmorphism aesthetic
 */
export default function ScrollDownButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable <= 20) {
        setIsScrollable(false);
        setScrollProgress(0);
        setIsNearBottom(false);
        return;
      }

      setIsScrollable(true);
      const progress = Math.min(100, Math.max(0, (scrollY / totalScrollable) * 100));
      setScrollProgress(progress);

      // Consider near bottom if within 140px or past 88%
      const nearBottom = scrollY + clientHeight >= scrollHeight - 140 || progress >= 92;
      setIsNearBottom(nearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const handleClick = () => {
    if (isNearBottom) {
      // Scroll smoothly back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Intelligently find the next major section or scroll down a viewport
      const sections = Array.from(document.querySelectorAll('section, main > div, article, footer'));
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
      const nextSection = sections.find((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + currentScroll;
        return top > currentScroll + 60;
      });

      if (nextSection) {
        const top = nextSection.getBoundingClientRect().top + currentScroll - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.82, behavior: 'smooth' });
      }
    }
  };

  // If page is completely unscrollable, hide
  if (!isScrollable) return null;

  // SVG circular progress calculation
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      <div
        className={`pointer-events-none hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#f5ede0] bg-[#140a2c]/90 border border-fuchsia-500/30 shadow-[0_4px_20px_rgba(217,70,239,0.25)] backdrop-blur-md transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-500 animate-pulse" />
        <span>{isNearBottom ? 'Back to Top' : 'Scroll Down'}</span>
      </div>

      {/* Floating Action Button with Circular Progress */}
      <button
        onClick={handleClick}
        aria-label={isNearBottom ? 'Scroll to top of page' : 'Scroll down page'}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#100727]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_8px_36px_rgba(236,72,153,0.45),0_0_30px_rgba(217,70,239,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 52 52"
        >
          {/* Background track circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2.5"
          />
          {/* Glowing animated progress stroke */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="url(#scrollGradient)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic Icon (Arrow down / up) */}
        <div
          className={`relative z-10 flex items-center justify-center text-fuchsia-200 group-hover:text-white transition-all duration-300 ${
            isNearBottom ? 'rotate-180 -translate-y-0.5' : 'translate-y-0'
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
              !isNearBottom ? 'animate-bounce-subtle' : ''
            }`}
          />
        </div>

        {/* Micro ping ring on top of page to invite user interaction */}
        {scrollProgress < 5 && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500 shadow-[0_0_8px_#ec4899]" />
          </span>
        )}
      </button>

      {/* Keyframe styles */}
      <style>{`
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
