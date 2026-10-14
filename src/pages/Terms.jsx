import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { FileText, Users, Zap, AlertTriangle, Scale, RefreshCw, Mail } from 'lucide-react';

const sections = [
  {
    icon: Users,
    title: 'Eligibility & Account',
    accent: 'purple',
    content: `You must be at least 13 years old to use Vibora (16 in the European Economic Area). By creating an account you confirm that the information you provide is accurate and that you will keep your credentials secure. You are responsible for all activity that occurs under your account. Vibora reserves the right to terminate accounts found to be in violation of these terms.`,
  },
  {
    icon: Zap,
    title: 'Acceptable Use',
    accent: 'blue',
    content: `Vibora is a platform for genuine human connection. You agree not to use it to send spam, harass, threaten, or deceive other users; to distribute malware or engage in phishing; to scrape or harvest user data; to impersonate others; or to post illegal content of any kind. Violations may result in immediate account suspension.`,
  },
  {
    icon: FileText,
    title: 'Content You Post',
    accent: 'pink',
    content: `You retain ownership of content you create and share on Vibora. By posting content, you grant Vibora a non-exclusive, royalty-free, worldwide licence to store, display, and distribute that content solely for the purpose of operating and improving our services. You represent that you have all necessary rights to share the content you post.`,
  },
  {
    icon: AlertTriangle,
    title: 'Prohibited Content',
    accent: 'gold',
    content: `The following are strictly prohibited on Vibora: CSAM or any content that sexually exploits minors; non-consensual intimate imagery; content promoting terrorism or mass violence; hate speech targeting protected characteristics; coordinated inauthentic behaviour; and fraud or financial scams. We report violations to appropriate authorities where required by law.`,
  },
  {
    icon: Scale,
    title: 'Limitation of Liability',
    accent: 'magenta',
    content: `Vibora is provided "as is" without warranties of any kind. To the maximum extent permitted by applicable law, Vibora's total liability for any claims arising out of these Terms shall not exceed the amount you paid us in the 12 months preceding the claim, or USD 100, whichever is greater. We are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    icon: RefreshCw,
    title: 'Changes to These Terms',
    accent: 'purple',
    content: `We may update these Terms of Service from time to time. When we make material changes, we will notify you via email and in-app notification at least 14 days before the changes take effect. Continuing to use Vibora after that date constitutes your acceptance of the updated terms. If you disagree, you may close your account before the effective date.`,
  },
  {
    icon: Mail,
    title: 'Governing Law & Contact',
    accent: 'blue',
    content: `These Terms are governed by and construed in accordance with the laws of the State of Delaware, USA, without regard to conflict-of-law provisions. Any disputes shall be resolved exclusively in the courts of Delaware. For questions about these Terms, contact our legal team at legal@vibora.app.`,
  },
];

const accentMap = {
  purple:  { icon: 'text-vibora-purple', bg: 'bg-vibora-purple/10', border: 'border-vibora-purple/30', glow: 'hover:border-vibora-purple/40 hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)]' },
  pink:    { icon: 'text-vibora-pink',   bg: 'bg-vibora-pink/10',   border: 'border-vibora-pink/30',   glow: 'hover:border-vibora-pink/40 hover:shadow-[0_8px_48px_rgba(236,72,153,0.12)]' },
  blue:    { icon: 'text-vibora-blue',   bg: 'bg-vibora-blue/10',   border: 'border-vibora-blue/30',   glow: 'hover:border-vibora-blue/40 hover:shadow-[0_8px_48px_rgba(91,141,239,0.12)]' },
  magenta: { icon: 'text-vibora-magenta',bg: 'bg-vibora-magenta/10',border: 'border-vibora-magenta/30',glow: 'hover:border-vibora-magenta/40 hover:shadow-[0_8px_48px_rgba(217,70,239,0.12)]' },
  gold:    { icon: 'text-vibora-gold',   bg: 'bg-vibora-gold/10',   border: 'border-vibora-gold/30',   glow: 'hover:border-vibora-gold/40 hover:shadow-[0_8px_48px_rgba(245,197,24,0.12)]' },
};

function TermsCard({ section, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = (index % 3) * 80;
  const a = accentMap[section.accent] || accentMap.purple;
  const Icon = section.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl p-6 sm:p-8 border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
        shadow-[0_4px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ${a.glow}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon badge */}
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 border transition-transform duration-300 group-hover:scale-110 ${a.bg} ${a.border}`}>
        <Icon size={20} className={a.icon} />
      </div>

      {/* Ghost number */}
      <div className={`absolute top-6 right-6 text-3xl font-black opacity-[0.06] select-none ${a.icon}`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />

      <h3 className="text-lg sm:text-xl font-bold text-vibora-cream mb-3">{section.title}</h3>
      <p className="text-sm sm:text-base text-vibora-cream/65 leading-relaxed">{section.content}</p>
    </div>
  );
}

function HeroBlock() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="relative overflow-hidden pt-40 pb-20 px-5 sm:px-8 text-center">
      {/* BG glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full pointer-events-none blur-[60px]"
        style={{ background: 'radial-gradient(ellipse, rgba(91,141,239,0.16) 0%, transparent 70%)' }} />
      <div className="absolute top-24 left-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-32 right-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Pill */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 select-none
        border border-vibora-blue/35 bg-vibora-blue/10 text-blue-300
        transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <FileText size={13} /> Legal • Terms
      </div>

      {/* Heading */}
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6
        transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="text-vibora-cream">Terms of </span>
        <span className="bg-gradient-to-br from-vibora-blue to-vibora-purple bg-clip-text text-transparent">
          Service
        </span>
      </h1>

      {/* Subtitle */}
      <p className={`text-base sm:text-lg text-vibora-cream/65 max-w-2xl mx-auto leading-relaxed mb-6
        transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        By using Vibora, you agree to these terms. We've written them in plain language — because
        you deserve to understand the rules before you play.
      </p>

      {/* Effective date */}
      <div className={`inline-flex items-center gap-2 text-xs text-vibora-cream/40
        transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-vibora-blue shadow-[0_0_8px_theme(colors.vibora.blue)]" />
        Effective: October 2025
      </div>
    </div>
  );
}

export default function Terms() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service — Vibora';
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen
          durationMs={1800}
          subtitle="Terms of Service & Usage"
          onComplete={() => setLoading(false)}
        />
      )}
      <div
        className={`min-h-screen bg-vibora-bg text-vibora-cream overflow-x-hidden transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />

        <HeroBlock />

        <section className="relative px-5 sm:px-8 pb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {sections.map((s, i) => (
              <TermsCard key={s.title} section={s} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden
            border border-vibora-blue/20 bg-gradient-to-br from-vibora-blue/10 to-vibora-purple/[0.06]">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(91,141,239,0.08) 0%, transparent 70%)' }} />

            <Scale size={36} className="mx-auto mb-4 text-vibora-blue" />
            <h3 className="text-2xl font-bold text-vibora-cream mb-3">Legal questions?</h3>
            <p className="text-vibora-cream/65 mb-6 max-w-md mx-auto text-sm leading-relaxed">
              Our legal team is available to assist with any questions about these terms.
            </p>
            <a
              href="mailto:legal@vibora.app"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-vibora-blue to-vibora-purple shadow-[0_4px_24px_rgba(91,141,239,0.35)]
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(91,141,239,0.55)] active:scale-95"
            >
              <Mail size={15} /> legal@vibora.app
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
