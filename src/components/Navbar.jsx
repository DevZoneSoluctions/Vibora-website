import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Features',  href: '#features' },
  { label: 'Discover',  href: '#discover' },
  { label: 'Community', href: '#community' },
];

const LogoImage = () => (
  <img
    src="/logo.png"
    alt="Vibora"
    className="h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    style={{ filter: 'drop-shadow(0 2px 16px rgba(192, 38, 211, 0.55))' }}
  />
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('Home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 120;
      for (const { label, href } of NAV_LINKS) {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top && scrollPos < top + el.offsetHeight) {
            setActive(label);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="fixed inset-x-0 top-0 z-50 h-[84px] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10, 6, 32, 0.95)' : 'rgba(10, 6, 32, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-full flex items-center justify-between">

          {/* LEFT: Logo — home anchor on home page, router Link on other pages */}
          {isHome ? (
            <a
              href="#home"
              onClick={() => setActive('Home')}
              className="flex items-center shrink-0 select-none group"
              aria-label="Vibora home"
            >
              <LogoImage />
            </a>
          ) : (
            <Link
              to="/"
              className="flex items-center shrink-0 select-none group"
              aria-label="Vibora home"
            >
              <LogoImage />
            </Link>
          )}

          {/* CENTER: Desktop links */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = isHome && active === label;
              const targetUrl = isHome ? href : (href === '#home' ? '/' : `/${href}`);
              return (
                <li key={label}>
                  {isHome ? (
                    <a
                      href={href}
                      onClick={() => {
                        setActive(label);
                        if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="relative text-sm transition-colors duration-200 select-none"
                      style={{
                        color: isActive ? '#e879f9' : 'rgba(255,255,255,0.65)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#e879f9'; }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                    >
                      {label}
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? '5px' : '0px',
                          height: '5px',
                          background: 'linear-gradient(135deg, #c026d3, #7c3aed)',
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                    </a>
                  ) : (
                    <Link
                      to={targetUrl}
                      onClick={() => {
                        setActive(label);
                        if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="relative text-sm transition-colors duration-200 select-none"
                      style={{
                        color: isActive ? '#e879f9' : 'rgba(255,255,255,0.65)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#e879f9'; }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                    >
                      {label}
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? '5px' : '0px',
                          height: '5px',
                          background: 'linear-gradient(135deg, #c026d3, #7c3aed)',
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Get App button */}
          <div className="hidden md:block shrink-0">
            <a
              href="#download"
              id="navbar-get-app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #c026d3 0%, #7c3aed 100%)',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(192, 38, 211, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.35)'; }}
            >
              Get App
              <ArrowRight size={15} />
            </a>
          </div>

          {/* MOBILE: Hamburger */}
          <button
            id="navbar-hamburger"
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — Right-side Drawer */}

      {/* Backdrop */}
      <div
        id="navbar-backdrop"
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        style={{
          background: 'rgba(4, 2, 18, 0.7)',
          backdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer panel */}
      <div
        id="navbar-mobile-menu"
        className="fixed top-0 right-0 z-50 md:hidden h-full w-[280px] transition-transform duration-300 ease-in-out"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          background: '#0d0820',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Drawer top bar */}
        <div
          className="flex items-center justify-between px-5"
          style={{ height: '76px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <img
            src="/logo.png"
            alt="Vibora"
            className="h-11 sm:h-12 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 2px 12px rgba(192,38,211,0.55))' }}
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-xl text-white/60 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1 px-3 pt-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = isHome && active === label;
            const targetUrl = isHome ? href : (href === '#home' ? '/' : `/${href}`);
            return isHome ? (
              <a
                key={label}
                href={href}
                onClick={() => {
                  setActive(label);
                  setMenuOpen(false);
                  if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm transition-all duration-150"
                style={{
                  color: isActive ? '#e879f9' : 'rgba(255,255,255,0.7)',
                  background: isActive ? 'rgba(192,38,211,0.12)' : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                  borderLeft: isActive ? '3px solid #c026d3' : '3px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
                    e.currentTarget.style.color = '#e879f9';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }
                }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={targetUrl}
                onClick={() => {
                  setActive(label);
                  setMenuOpen(false);
                  if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm transition-all duration-150"
                style={{
                  color: isActive ? '#e879f9' : 'rgba(255,255,255,0.7)',
                  background: isActive ? 'rgba(192,38,211,0.12)' : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                  borderLeft: isActive ? '3px solid #c026d3' : '3px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
                    e.currentTarget.style.color = '#e879f9';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Get App button */}
        <div className="absolute bottom-10 left-0 right-0 px-5">
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #c026d3 0%, #7c3aed 100%)',
              boxShadow: '0 4px 22px rgba(124,58,237,0.45)',
            }}
          >
            Get App <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
