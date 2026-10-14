import React, { useEffect, useRef, useState } from 'react';

/**
 * Fully Responsive Magnetic Button Hover & Luxury Cursor
 * - Auto-detects device type (Mobile, Tablet, Laptop, Desktop, Short screen)
 * - On Mobile & Tablets (< 1024px or touch/coarse): Disabled to prevent touch delays and awkward offset taps
 * - On Laptop, Desktop & High-res screens (with pointer): Active with smooth bounded magnetic attraction
 * - Bounded magnetic force: Clamped to safe range so buttons never overflow or warp
 * - Edge-clamped coordinates: Never triggers horizontal or vertical scrollbars
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [magneticState, setMagneticState] = useState(null); // { width, height } | null
  const [isEnabled, setIsEnabled] = useState(false);

  // Coordinates & physics state
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const activeMagneticEl = useRef(null);
  const animFrameId = useRef(null);

  // Check if current viewport and input support custom magnetic cursor
  const checkResponsiveness = () => {
    if (typeof window === 'undefined') return false;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    const isSmallScreen = window.innerWidth < 1024; // Mobile & tablet threshold

    // Enable only for desktop/laptop with fine pointer and hover capability
    return !isTouch && !noHover && !isSmallScreen;
  };

  useEffect(() => {
    const handleResize = () => {
      const active = checkResponsiveness();
      setIsEnabled(active);

      // If switched to mobile/tablet, reset any active magnetic button transform
      if (!active && activeMagneticEl.current) {
        activeMagneticEl.current.style.transform = '';
        activeMagneticEl.current.style.transition = '';
        activeMagneticEl.current = null;
        setMagneticState(null);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      // Clamp coordinates within window to prevent overflow on short/narrow viewports
      const clampedX = Math.max(0, Math.min(e.clientX, window.innerWidth));
      const clampedY = Math.max(0, Math.min(e.clientY, window.innerHeight));
      mouse.current = { x: clampedX, y: clampedY };

      if (!isVisible) setIsVisible(true);



      const target = e.target;
      const magneticTarget = target.closest(
        'button, a, [role="button"], .magnetic, input[type="submit"], input[type="button"]'
      );

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = clampedX - centerX;
        const distY = clampedY - centerY;

        // Bounded magnetic pull (max 14px horizontally, 9px vertically for refined luxury feel)
        const maxPullX = 14;
        const maxPullY = 9;
        const pullX = Math.max(-maxPullX, Math.min(distX * 0.24, maxPullX));
        const pullY = Math.max(-maxPullY, Math.min(distY * 0.24, maxPullY));

        magneticTarget.style.transition = 'transform 0.15s ease-out';
        magneticTarget.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;

        activeMagneticEl.current = magneticTarget;

        setMagneticState({
          width: Math.min(rect.width + 16, Math.max(window.innerWidth - 32, 50)),
          height: Math.min(rect.height + 12, 72),
        });
      } else {
        if (activeMagneticEl.current) {
          activeMagneticEl.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
          activeMagneticEl.current.style.transform = 'translate3d(0px, 0px, 0px)';
          activeMagneticEl.current = null;
        }
        setMagneticState(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (activeMagneticEl.current) {
        activeMagneticEl.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        activeMagneticEl.current.style.transform = 'translate3d(0px, 0px, 0px)';
        activeMagneticEl.current = null;
      }
      setMagneticState(null);
    };

    const handleMouseEnter = () => setIsVisible(true);

    const render = () => {
      let targetX = mouse.current.x;
      let targetY = mouse.current.y;

      if (activeMagneticEl.current) {
        const rect = activeMagneticEl.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = centerX + (mouse.current.x - centerX) * 0.25;
        targetY = centerY + (mouse.current.y - centerY) * 0.25;
      }

      ringPos.current.x += (targetX - ringPos.current.x) * 0.2;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.2;

      glowPos.current.x += (targetX - glowPos.current.x) * 0.08;
      glowPos.current.y += (targetY - glowPos.current.y) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      if (activeMagneticEl.current) {
        activeMagneticEl.current.style.transform = '';
      }
    };
  }, [isEnabled, isVisible]);

  // If on mobile / tablet / touch, render nothing to keep DOM completely clean
  if (!isEnabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      aria-hidden="true"
    >
      {/* 1. Ambient luxury spotlight halo */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 w-64 h-64 -ml-32 -mt-32 rounded-full blur-[70px] transition-all duration-500 ease-out"
        style={{
          background: magneticState
            ? 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.1) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(91,141,239,0.05) 50%, transparent 70%)',
        }}
      />

      {/* 2. Magnetic Fluid Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none absolute top-0 left-0 transition-all duration-200 ease-out flex items-center justify-center ${magneticState
          ? 'border-2 border-pink-400/80 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.4)] backdrop-blur-[2px]'
          : isClicking
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border-2 border-purple-400 bg-purple-500/20 scale-90 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
            : 'w-8 h-8 -ml-4 -mt-4 rounded-full border border-pink-500/40 bg-pink-500/5 shadow-[0_0_10px_rgba(236,72,153,0.2)]'
          }`}
        style={{
          width: magneticState ? `${magneticState.width}px` : undefined,
          height: magneticState ? `${magneticState.height}px` : undefined,
          borderRadius: magneticState ? '9999px' : undefined,
          marginLeft: magneticState ? `-${magneticState.width / 2}px` : undefined,
          marginTop: magneticState ? `-${magneticState.height / 2}px` : undefined,
        }}
      >
        {!magneticState && (
          <div
            className={`rounded-full transition-all duration-150 ${isClicking
              ? 'w-1 h-1 bg-white'
              : 'w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 shadow-[0_0_6px_#ec4899]'
              }`}
          />
        )}
      </div>
    </div>
  );
}
