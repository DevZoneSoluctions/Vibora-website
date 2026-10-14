import React from "react";
import {
  ShieldCheck,
  Video,
  Ban,
  Palette,
  Mic,
  FolderHeart,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const TaglineSection = () => {
  const features = [
    { label: "Private by Design", icon: ShieldCheck },
    { label: "HD Video Calls", icon: Video },
    { label: "Zero Ads, Ever", icon: Ban },
    { label: "Custom Themes", icon: Palette },
    { label: "Voice Updates", icon: Mic },
    { label: "Smart Folders", icon: FolderHeart },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0a0620] px-5 py-24 text-[#f5ede0] sm:px-8 sm:py-32">
      {/* ── Background glows ───────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[340px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/20 blur-[130px]" />
        <div className="absolute -left-28 bottom-0 h-[280px] w-[280px] rounded-full bg-[#5b8def]/15 blur-[110px]" />
        <div className="absolute -right-28 bottom-0 h-[280px] w-[280px] rounded-full bg-[#ec4899]/15 blur-[110px]" />

        {/* 1px white subtle grid overlay (2.5% opacity) */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Top Pill: logo.png (h-5) + THE VIBORA EXPERIENCE */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wide text-[#f5ede0] shadow-sm backdrop-blur-md sm:text-sm">
          <img
            src="/logo.png"
            alt="Vibora logo"
            className="h-5 w-auto object-contain"
          />
          <span className="h-4 w-px bg-white/20" />
          <Sparkles size={14} className="text-[#ec4899]" />
          <span>THE VIBORA EXPERIENCE</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold leading-[1.13] tracking-tight text-[#f5ede0] sm:text-5xl md:text-6xl lg:text-7xl">
          More than messages.
          <br />
          <span className="bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
            A place to belong.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#f5ede0]/65 sm:text-lg">
          Vibora blends secure messaging with a design that feels like yours.
          Voice notes, HD calls, custom themes — everything you need, in one
          beautifully simple app.
        </p>

        {/* 6 Feature Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-[#f5ede0]/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-[#f5ede0]"
            >
              <Icon
                size={17}
                className="text-[#ec4899] transition-colors duration-200 group-hover:text-[#a855f7]"
              />
              {label}
            </div>
          ))}
        </div>

        {/* Bottom accent: Arrow-down circle with glowing border & side gradient lines */}
        <div className="mx-auto mt-16 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a855f7]/50" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/[0.08] text-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <ArrowDown size={16} />
          </div>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a855f7]/50" />
        </div>
      </div>

      {/* ── Section bottom gradient divider line ──────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent" />
    </section>
  );
};

export default TaglineSection;