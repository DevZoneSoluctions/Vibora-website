import React from "react";
import {
  MessageCircle,
  Video,
  Radar,
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  Lock,
  Headphones,
  Flame,
  Radio,
} from "lucide-react";
import img1 from "../assets/img1 (1).png";
import img2 from "../assets/img1 (2).png";
import img3 from "../assets/img1 (3).png";

const FeatureDark = () => {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-[#0a0620] py-28 px-5 sm:px-8 lg:px-12 text-[#f5ede0]"
    >
      {/* ── Background Glow Orbs & Grid ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-[12%] -left-32 h-[480px] w-[480px] rounded-full bg-[#5b8def]/20 blur-[150px]"
          style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[48%] -right-32 h-[500px] w-[500px] rounded-full bg-[#a855f7]/22 blur-[160px]"
          style={{ animation: "pulseGlow 7s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] h-[420px] w-[420px] rounded-full bg-[#ec4899]/18 blur-[150px]"
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

      {/* ── Section Header ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl text-center mb-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/40">
          <Sparkles size={14} className="text-[#a855f7] animate-pulse" />
          Feature Highlights
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-[#f5ede0]">
          Built for how you{" "}
          <span className="bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
            naturally connect.
          </span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#f5ede0]/65 leading-relaxed">
          Experience private messaging, smart community spaces, and crystal-clear
          calls designed around your privacy and expression.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-32">
        {/* ── Feature 1: Image Left + Text Right (img3 - Chat & Calls) ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Left with Floating Glass Badges */}
          <div className="relative flex justify-center items-center">
            {/* Pulsing Glow behind Phone */}
            <div
              className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-[#5b8def]/25 blur-[100px]"
              style={{ animation: "pulseGlow 5s ease-in-out infinite" }}
            />

            {/* Floating Badge 1: Top-Left "End-to-End Encrypted" */}
            <div
              className="absolute -top-4 left-2 sm:-left-4 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-[#140b2e]/85 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.55),0_0_20px_rgba(91,141,239,0.2)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadge 5s ease-in-out infinite" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <Lock size={14} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">End-to-End Encrypted</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Protection
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Bottom-Right "HD Audio Calls" */}
            <div
              className="absolute -bottom-4 right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-2xl border border-fuchsia-500/30 bg-[#140b2e]/90 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(217,70,239,0.2)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadgeRev 5.5s ease-in-out infinite 0.5s" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-600 to-pink-500 text-white shadow-sm">
                <Headphones size={14} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">48kHz Lossless HD</span>
                <span className="text-[10px] text-fuchsia-300/80">Zero Lag Voice</span>
              </div>
            </div>

            {/* Phone Mockup with Gentle Floating Animation */}
            <div
              className="relative z-10 w-[64%] max-w-[310px] sm:w-[55%] lg:w-[68%] lg:max-w-[340px]"
              style={{ animation: "featFloat 6s ease-in-out infinite" }}
            >
              <img
                src={img3}
                alt="Vibora Chat & Calls"
                className="block h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(91,141,239,0.35)] transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5b8def]/30 bg-[#5b8def]/10 px-4 py-1.5 text-xs font-semibold text-[#5b8def] shadow-sm">
              <MessageCircle size={15} />
              Private & Group Messaging
            </div>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#f5ede0] leading-tight">
              See them. Hear them.{" "}
              <br />
              <span className="bg-gradient-to-r from-[#5b8def] to-[#a855f7] bg-clip-text italic text-transparent">
                Feel the vibe.
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#f5ede0]/65 leading-relaxed">
              Crystal-clear conversations with zero ad tracking and zero
              compression. Share photos, send quick voice notes, and jump into HD
              calls seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5b8def]/50 hover:bg-[#5b8def]/[0.06] hover:shadow-[0_0_35px_rgba(91,141,239,0.22)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b8def]/15 text-[#5b8def] transition-transform duration-300 group-hover:scale-110">
                  <Video size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0]">HD Video Calling</h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Smooth high-definition group and one-on-one calls that never cut out.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-amber-500/[0.06] hover:shadow-[0_0_35px_rgba(245,197,24,0.2)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-[#f5c518] transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0] flex items-center gap-1.5">
                  Privacy Protected
                  <span className="rounded-full bg-amber-400/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300">Vault</span>
                </h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Secure by design with granular control over who sees your activity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Feature 2: Image Right + Text Left (img1 - Discovery Radar) ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Left */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 text-xs font-semibold text-[#a855f7] shadow-sm">
              <Radio size={15} />
              Vibe Radar & Interests
            </div>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#f5ede0] leading-tight">
              Discover people who{" "}
              <br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent">
                genuinely get you.
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#f5ede0]/65 leading-relaxed">
              Find kindred spirits through common passions rather than random
              algorithms. Search by interests, creative pursuits, or local vibe
              circles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:bg-purple-500/[0.06] hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-[#a855f7] transition-transform duration-300 group-hover:scale-110">
                  <Radar size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0]">Radar Matching</h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Discover vibrant profiles nearby matching your shared interests.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-400/50 hover:bg-pink-500/[0.06] hover:shadow-[0_0_35px_rgba(236,72,153,0.22)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15 text-[#ec4899] transition-transform duration-300 group-hover:scale-110">
                  <Zap size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0]">Instant Spark</h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Break the ice with topic-based prompts that make saying hello effortless.
                </p>
              </div>
            </div>
          </div>

          {/* Image Right with Floating Badges */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Pulsing Purple Glow */}
            <div
              className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-[#a855f7]/25 blur-[110px]"
              style={{ animation: "pulseGlow 5.5s ease-in-out infinite 0.7s" }}
            />

            {/* Floating Badge 1: Top-Right "Radar Scanning" */}
            <div
              className="absolute -top-4 right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-2xl border border-purple-400/30 bg-[#160a2e]/90 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadge 5.5s ease-in-out infinite 0.3s" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-600 text-white shadow-sm">
                <Radar size={14} className="animate-spin" style={{ animationDuration: "6s" }} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">Live Vibe Radar</span>
                <span className="text-[10px] text-purple-300/80">12 Friends Nearby</span>
              </div>
            </div>

            {/* Floating Badge 2: Bottom-Left "96% Vibe Match" */}
            <div
              className="absolute -bottom-4 left-2 sm:-left-4 z-20 flex items-center gap-2 rounded-2xl border border-pink-400/30 bg-[#160a2e]/90 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(236,72,153,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadgeRev 5.8s ease-in-out infinite" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <Flame size={14} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">96% High Vibe</span>
                <span className="text-[10px] text-pink-300/80">Creative Match</span>
              </div>
            </div>

            {/* Phone Mockup with Gentle Floating Animation */}
            <div
              className="relative z-10 w-[64%] max-w-[310px] sm:w-[55%] lg:w-[68%] lg:max-w-[340px]"
              style={{ animation: "featFloatRev 6.2s ease-in-out infinite 0.4s" }}
            >
              <img
                src={img1}
                alt="Vibora Radar Discovery"
                className="block h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(168,85,247,0.35)] transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* ── Feature 3: Image Left + Text Right (img2 - Community Spaces) ─ */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Left with Floating Badges */}
          <div className="relative flex justify-center items-center">
            {/* Pulsing Pink Glow */}
            <div
              className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-[#ec4899]/25 blur-[110px]"
              style={{ animation: "pulseGlow 6s ease-in-out infinite 1.2s" }}
            />

            {/* Floating Badge 1: Top-Left "Active Community" */}
            <div
              className="absolute -top-4 left-2 sm:-left-4 z-20 flex items-center gap-2 rounded-2xl border border-pink-400/30 bg-[#160b2e]/90 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(236,72,153,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadge 5.2s ease-in-out infinite 0.6s" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600 text-white shadow-sm">
                <Users size={14} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">4.2k Vibers Inside</span>
                <span className="flex items-center gap-1 text-[10px] text-pink-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Chatting
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Bottom-Right "Live Audio Stage" */}
            <div
              className="absolute -bottom-4 right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-2xl border border-violet-400/30 bg-[#160b2e]/90 px-3.5 py-2 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(168,85,247,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{ animation: "floatBadgeRev 5.4s ease-in-out infinite 0.2s" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                <Sparkles size={14} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">Audio Hangout</span>
                <span className="text-[10px] text-violet-300/80">Host or Listen</span>
              </div>
            </div>

            {/* Phone Mockup with Gentle Floating Animation */}
            <div
              className="relative z-10 w-[64%] max-w-[310px] sm:w-[55%] lg:w-[68%] lg:max-w-[340px]"
              style={{ animation: "featFloat 6.4s ease-in-out infinite 0.8s" }}
            >
              <img
                src={img2}
                alt="Vibora Community Circles"
                className="block h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(236,72,153,0.35)] transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-1.5 text-xs font-semibold text-[#ec4899] shadow-sm">
              <Users size={15} />
              Vibrant Communities
            </div>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#f5ede0] leading-tight">
              Spaces created for{" "}
              <br />
              <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#5b8def] bg-clip-text italic text-transparent">
                true belonging.
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#f5ede0]/65 leading-relaxed">
              Step into community hubs with shared playlists, audio hangouts, and
              events. Host your own group or join thousands of thriving channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-400/50 hover:bg-pink-500/[0.06] hover:shadow-[0_0_35px_rgba(236,72,153,0.22)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15 text-[#ec4899] transition-transform duration-300 group-hover:scale-110">
                  <Users size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0]">Custom Circles</h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Create public or private communities with custom roles and theme colors.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5b8def]/50 hover:bg-[#5b8def]/[0.06] hover:shadow-[0_0_35px_rgba(91,141,239,0.22)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b8def]/15 text-[#5b8def] transition-transform duration-300 group-hover:scale-110">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-semibold text-sm text-[#f5ede0]">Live Audio Rooms</h4>
                <p className="mt-1 text-xs text-[#f5ede0]/60 leading-relaxed">
                  Hop into voice stages to listen, discuss, and meet new creators anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section bottom gradient divider line ──────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent" />

      {/* ── CSS Keyframe Animations ───────────────────────────────── */}
      <style>{`
        @keyframes featFloat {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50%       { transform: translateY(-12px) rotate(0.5deg); }
        }
        @keyframes featFloatRev {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50%       { transform: translateY(12px) rotate(-0.5deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes floatBadgeRev {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(7px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          #features * {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureDark;
