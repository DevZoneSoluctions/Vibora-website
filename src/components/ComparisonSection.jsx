import React from "react";
import { Check, X, Sparkles, Star } from "lucide-react";

const COMPARISON_ITEMS = [
  {
    feature: "Ad-free Experience",
    vibora: "Zero ads, zero data tracking or behavioral profiling",
    others: "Intrusive sponsored ads and continuous telemetry collection",
  },
  {
    feature: "Media & Call Quality",
    vibora: "Lossless HD audio, crisp 60fps video & uncompressed voice notes",
    others: "Heavily compressed photos, video lag and audio dropouts",
  },
  {
    feature: "Social Discovery",
    vibora: "Smart vibe radar & interest-based spontaneous matching",
    others: "Random phone number syncing or opaque algorithmic feeds",
  },
  {
    feature: "Privacy & Control",
    vibora: "Granular privacy controls, vanish timers and ghost mode",
    others: "Confusing multi-layer privacy menus and hidden telemetry",
  },
  {
    feature: "Personalization",
    vibora: "Custom color themes, circle branding and profile spaces",
    others: "Rigid static interfaces with minimal individual styling",
  },
  {
    feature: "Community Atmosphere",
    vibora: "Safe, moderated spaces designed for authentic belonging",
    others: "Designed for endless doomscrolling and notification fatigue",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#080418] py-28 px-5 sm:px-8 lg:px-12 text-[#f5ede0]">
      {/* ── Background Glow Orbs & Grid ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left blue glow */}
        <div
          className="absolute top-[20%] -left-32 h-[450px] w-[450px] rounded-full bg-[#5b8def]/15 blur-[140px]"
          style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
        />

        {/* Right purple glow */}
        <div
          className="absolute top-[10%] -right-32 h-[480px] w-[480px] rounded-full bg-[#a855f7]/20 blur-[150px]"
          style={{ animation: "pulseGlow 7s ease-in-out infinite 1s" }}
        />

        {/* Center pink glow */}
        <div
          className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#ec4899]/15 blur-[140px]"
          style={{ animation: "pulseGlow 8s ease-in-out infinite 2s" }}
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

      <div className="mx-auto max-w-5xl">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400/40">
            <Sparkles size={14} className="text-[#a855f7] animate-pulse" />
            Side-By-Side Comparison
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-[#f5ede0]">
            Why choose{" "}
            <span className="bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
              Vibora?
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#f5ede0]/65 max-w-xl mx-auto leading-relaxed">
            See how Vibora reimagines the everyday messaging and social
            experience for meaningful, private connection.
          </p>
        </div>

        {/* ── 2 Columns: Left = Vibora (glow highlight), Right = Others ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Vibora (Highlighted & Animated) */}
          <div className="group relative rounded-3xl border border-[#a855f7]/45 bg-gradient-to-b from-[#a855f7]/15 via-white/[0.04] to-white/[0.02] p-7 sm:p-9 shadow-[0_0_60px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/60 hover:shadow-[0_0_75px_rgba(217,70,239,0.35)]">
            {/* Top Bar with Recommended Gold Badge + Star */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Vibora logo"
                  className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)]"
                />
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-amber-400 fill-amber-400 animate-pulse" />
                  <span className="text-xs font-semibold text-amber-300">Choice</span>
                </div>
              </div>

              {/* Gold "Recommended" Badge */}
              <span className="rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 px-3.5 py-1 text-xs font-bold text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-transform duration-300 hover:scale-105">
                ★ Recommended
              </span>
            </div>

            {/* List of features with interactive hover */}
            <ul className="mt-6 space-y-4">
              {COMPARISON_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.05]"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 transition-all duration-200 group-hover/item:scale-110 group-hover/item:shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#f5ede0] transition-colors duration-200 group-hover/item:text-white">
                      {item.feature}
                    </h4>
                    <p className="text-xs text-[#f5ede0]/75 mt-1 leading-relaxed">
                      {item.vibora}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Other Apps (Muted with subtle hover) */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 backdrop-blur-md opacity-85 transition-opacity duration-300 hover:opacity-100">
            {/* Top pill badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="text-lg font-bold text-[#f5ede0]/80">
                  Other Messengers
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f5ede0]/60">
                Legacy Platforms
              </span>
            </div>

            {/* List of features */}
            <ul className="mt-6 space-y-4">
              {COMPARISON_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 p-2 rounded-xl">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400">
                    <X size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#f5ede0]/75">
                      {item.feature}
                    </h4>
                    <p className="text-xs text-[#f5ede0]/50 mt-1 leading-relaxed">
                      {item.others}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Section bottom gradient divider line ──────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent" />

      {/* ── Glow pulse animation ──────────────────────────────────── */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection;
