import React from "react";
import { Sparkles, Users, MessageSquare, Compass, Star } from "lucide-react";

const STATS = [
  {
    num: "10K+",
    label: "Active Users",
    sub: "Growing weekly",
    icon: Users,
    iconColor: "text-[#5b8def]",
    iconBg: "bg-[#5b8def]/15 border-[#5b8def]/30",
  },
  {
    num: "1M+",
    label: "Messages Sent",
    sub: "Encrypted & secure",
    icon: MessageSquare,
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/15 border-fuchsia-500/30",
  },
  {
    num: "500+",
    label: "Communities",
    sub: "Global hubs",
    icon: Compass,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/30",
  },
  {
    num: "4.9★",
    label: "User Satisfaction",
    sub: "Loved worldwide",
    icon: Star,
    iconColor: "text-[#f5c518]",
    iconBg: "bg-amber-500/15 border-amber-500/30",
  },
];

const StatsSection = () => {
  return (
    <section
      id="community"
      className="relative isolate overflow-hidden bg-[#0d0824] py-28 px-5 sm:px-8 lg:px-12 text-[#f5ede0]"
    >
      {/* ── Background Glow Orbs & Grid ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top pink glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[650px] rounded-full bg-[#ec4899]/15 blur-[150px]"
          style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
        />

        {/* Bottom purple glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[380px] w-[600px] rounded-full bg-[#a855f7]/18 blur-[140px]"
          style={{ animation: "pulseGlow 7s ease-in-out infinite 1s" }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/40">
            <Sparkles size={14} className="text-[#ec4899] animate-pulse" />
            Growing Together
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-[#f5ede0]">
            Trusted by people who{" "}
            <span className="bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
              love real connection.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#f5ede0]/65 leading-relaxed">
            Real metrics from an engaged, privacy-first community that continues
            to expand every day.
          </p>
        </div>

        {/* ── 4 Stat Cards: 4 cols desktop, 2 cols mobile ────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] backdrop-blur-md"
              >
                {/* Icon Container with glowing scale on hover */}
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${stat.iconBg} ${stat.iconColor} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={20} />
                </div>

                {/* Animated Gold/Purple/Blue Gradient Stat Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#f5c518] drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {stat.num}
                </div>

                {/* Stat Label */}
                <div className="mt-3 text-sm sm:text-base font-bold text-[#f5ede0]">
                  {stat.label}
                </div>

                {/* Micro Subtitle */}
                <div className="mt-1 text-xs text-[#f5ede0]/55 flex items-center justify-center gap-1">
                  <span>{stat.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Section bottom gradient divider line ──────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent" />

      {/* ── Pulse Glow Animation ──────────────────────────────────── */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
