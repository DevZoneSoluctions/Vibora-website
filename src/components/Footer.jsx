import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#0a0620] pt-16 pb-12 px-5 sm:px-8 lg:px-12 text-[#f5ede0]">
      {/* ── Background Glow ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[320px] w-[600px] rounded-full bg-[#a855f7]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ── Columns Layout: Centered on Mobile, Aligned on sm/md ─────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14 text-center sm:text-left">

          {/* Column 1: logo.png + Tagline */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center sm:items-start">
            {isHome ? (
              <a
                href="#home"
                onClick={scrollToTop}
                className="inline-block mb-4 select-none group"
                aria-label="Vibora home"
              >
                <img
                  src="/logo.png"
                  alt="Vibora logo"
                  className="h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{ filter: 'drop-shadow(0 2px 16px rgba(168,85,247,0.5))' }}
                />
              </a>
            ) : (
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-block mb-4 select-none group"
                aria-label="Vibora home"
              >
                <img
                  src="/logo.png"
                  alt="Vibora logo"
                  className="h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{ filter: 'drop-shadow(0 2px 16px rgba(168,85,247,0.5))' }}
                />
              </Link>
            )}

            <p className="text-base font-semibold tracking-wide text-[#f5ede0]/90 mb-2">
              Connect • Chat • Call • Belong
            </p>
            <p className="text-xs sm:text-sm text-[#f5ede0]/60 leading-relaxed max-w-sm">
              The modern standard for privacy-first, expressive social connection.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f5ede0] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-[#f5ede0]/65 flex flex-col items-center sm:items-start">
              <li>
                {isHome ? (
                  <a
                    href="#home"
                    onClick={scrollToTop}
                    className="transition-colors hover:text-[#f5ede0]"
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="transition-colors hover:text-[#f5ede0]"
                  >
                    Home
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#features" className="transition-colors hover:text-[#f5ede0]">
                    Features
                  </a>
                ) : (
                  <Link to="/#features" className="transition-colors hover:text-[#f5ede0]">
                    Features
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#discover" className="transition-colors hover:text-[#f5ede0]">
                    Discover
                  </a>
                ) : (
                  <Link to="/#discover" className="transition-colors hover:text-[#f5ede0]">
                    Discover
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#community" className="transition-colors hover:text-[#f5ede0]">
                    Community
                  </a>
                ) : (
                  <Link to="/#community" className="transition-colors hover:text-[#f5ede0]">
                    Community
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f5ede0] mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-[#f5ede0]/65 flex flex-col items-center sm:items-start">
              <li>
                <Link
                  to="/privacy"
                  onClick={scrollToTop}
                  className="transition-colors hover:text-[#f5ede0]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={scrollToTop}
                  className="transition-colors hover:text-[#f5ede0]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/child-safety"
                  onClick={scrollToTop}
                  className="transition-colors hover:text-[#f5ede0]"
                >
                  Child Safety
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#f5ede0]/50 text-center sm:text-left">
          <p>© 2025 Vibora. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#f5ede0]/65">
            Made with <span className="text-[#a855f7]">💜</span> for the global community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
