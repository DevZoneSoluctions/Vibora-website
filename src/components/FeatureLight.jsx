import React, { useEffect, useRef, useState } from "react";
import { Compass, Globe, Sparkles, Target, ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "Global Communities",
    desc: "Join groups that match your interests — from gaming to music to travel.",
    icon: Globe,
    badge: "100+ Hubs",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
    glowColor: "hover:shadow-[0_0_40px_rgba(217,70,239,0.2)]",
    borderColor: "hover:border-fuchsia-400/40",
  },
  {
    title: "Smart Matches",
    desc: "Meet people who get your vibe. Our algorithm connects you with like-minded friends.",
    icon: Sparkles,
    badge: "98% Match Rate",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    iconColor: "text-[#f5c518]",
    glowColor: "hover:shadow-[0_0_40px_rgba(245,197,24,0.2)]",
    borderColor: "hover:border-amber-400/40",
  },
  {
    title: "Curated Feeds",
    desc: "See what matters, skip the noise. Your feed, your rules, your way.",
    icon: Target,
    badge: "Zero Spam",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    iconColor: "text-[#5b8def]",
    glowColor: "hover:shadow-[0_0_40px_rgba(91,141,239,0.2)]",
    borderColor: "hover:border-blue-400/40",
  },
];

const FeatureLight = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="discover"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0b0526] py-24 px-5 text-[#f5ede0] sm:py-32 sm:px-8"
    >
      {/* ── Background Glow Effects ───────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Purple glow top-center */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/18 blur-[130px]" />

        {/* Warm gold-ish glow top-right */}
        <div className="absolute top-10 -right-20 h-[360px] w-[420px] rounded-full bg-[#f5c518]/10 blur-[130px]" />

        {/* Bottom-left purple glow */}
        <div className="absolute -left-20 bottom-0 h-[340px] w-[340px] rounded-full bg-[#a855f7]/15 blur-[120px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ── Top Label (Pill) ─────────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold text-purple-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400/40 sm:text-sm">
            <Compass size={15} className="text-fuchsia-300 animate-spin" style={{ animationDuration: "10s" }} />
            <span>✦ DISCOVER</span>
          </div>
        </div>

        {/* ── Heading (H2) ─────────────────────────────────────────── */}
        <h2 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-[#f5ede0] sm:text-5xl md:text-6xl">
          <span>Discover what matters.</span>
          <br />
          <span className="bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
            Find your vibe.
          </span>
        </h2>

        {/* ── Paragraph ────────────────────────────────────────────── */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[#f5ede0]/65 sm:text-lg">
          Join communities, find new friends, and share moments — all in a space
          built around respect and real connection.
        </p>

        {/* ── 3 Cards Grid ─────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map(
            (
              { title, desc, icon: Icon, badge, badgeColor, iconColor, glowColor, borderColor },
              index
            ) => (
              <div
                key={title}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.06] ${borderColor} ${glowColor} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                {/* Top Row: Icon Container + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Icon size={24} className={iconColor} />
                  </div>

                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm ${badgeColor}`}>
                    {badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-[#f5ede0] transition-colors duration-200 group-hover:text-white">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-[#f5ede0]/65">
                  {desc}
                </p>

                {/* Subtle Interactive Link Arrow */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  <span>Explore feature</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Bottom Accent Line ────────────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* ── Reduced Motion Helper ─────────────────────────────────── */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #discover * {
            transition-duration: 0.01ms !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureLight;
