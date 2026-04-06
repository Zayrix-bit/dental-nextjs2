import { Activity, MapPin, Phone, Mail, ArrowRight, Clock, Star } from 'lucide-react';
import { siteInfo, footerQuickLinks } from '@/data/siteData';
import config from '@/config';
import Link from 'next/link';

/* ── Inline SVG Social Icons ── */
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

/* ── Footer Section Title ── */
const FooterTitle = ({ children }) => (
  <h4 className="text-[0.65rem] font-black tracking-[0.2em] uppercase text-white/30 mb-5">
    {children}
  </h4>
);

/* ── Footer Link Item ── */
const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-sm text-white/50 hover:text-white transition-colors duration-200 block py-0.5"
    >
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060d12] text-white/80 mt-auto">
      {/* ── Top Curve Shape Divider ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-4 sm:h-6 lg:h-10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#060d12]" />
        </svg>
      </div>
      {/* ═══════════════════════════════════════════
          CONVERSION BLOCK (FINAL PUSH) 
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 border-b border-white/4 bg-primary/2">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-8 sm:py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-4xl lg:text-4xl font-black tracking-tighter text-white mb-3 sm:mb-4 leading-[1.1]">
              Still in Pain? Get <span className="text-emerald-400">Same-Day</span> Treatment.
            </h3>
            <p className="text-white/60 text-[15px] sm:text-[17px] leading-relaxed font-medium">
              Over 10,000 patients trust us for fast, pain-free dental care with transparent pricing.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto shrink-0 gap-3 sm:gap-4">
            <Link
              href="#appointment"
              className="group flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-[15px] sm:text-[16px] uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            >
              Get Emergency Care Now
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </Link>
            
            <div className="flex flex-col items-start lg:items-end gap-2.5 w-full">
              <span className="text-emerald-400 text-[11px] sm:text-[12px] font-black uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Limited slots available today
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-x-5 gap-y-2 text-[12px] sm:text-[13px] font-medium text-white/40">
                <span className="flex items-center gap-1.5"><span className="text-emerald-500/70">✔</span> Takes 30 seconds</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-500/70">✔</span> No obligation</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-500/70">✔</span> Same-day availability</span>
              </div>
              <span className="text-[12px] font-bold text-white/50 tracking-wide mt-0.5">
                No waiting. No hidden fees.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          MAIN FOOTER GRID
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-8 pb-8 lg:pt-12 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 lg:gap-10">

          {/* ── Brand & Ultimate Trust ── */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                {siteInfo.name}<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-[320px] mb-6">
              {config.brandDescription}
            </p>

            <div className="p-4 rounded-xl bg-white/2 border border-white/4 mb-6 inline-block w-full max-w-[320px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="flex gap-0.5 text-amber-400">
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                </div>
                <span className="text-white font-bold text-sm ml-1.5">4.9 Google Rating</span>
              </div>
              <p className="text-[13px] text-white/50 font-medium">(500+ Reviews) • Trusted by 10,000+ patients</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href={config.social.facebook} className="w-8 h-8 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href={config.social.instagram} className="w-8 h-8 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── Lean Navigation ── */}
          <div className="col-span-1 lg:col-span-2 lg:col-start-6">
            <FooterTitle>Quick Links</FooterTitle>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
              {footerQuickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
              <FooterLink href="/services">All Treatments</FooterLink>
            </ul>
          </div>

          {/* ── Active Contact Push ── */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:col-start-9 w-full">
            <FooterTitle>Get Immediate Help</FooterTitle>
            
            <div className="flex flex-col gap-4 w-full">
              {/* Direct Call Card */}
              <a href={`tel:${siteInfo.phoneRaw}`} className="group block p-4 sm:p-5 rounded-xl bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 transition-all">
                <span className="flex items-center gap-2 text-[11px] font-black text-white/60 uppercase tracking-widest mb-1.5 transition-colors group-hover:text-white/80">
                  <Phone className="w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors" /> Call Now
                </span>
                <span className="block text-2xl sm:text-[28px] font-black text-white leading-none tracking-tight mb-2">
                  {siteInfo.phone}
                </span>
                <span className="block text-[13px] text-white/50 font-medium">
                  Speak to a clinical expert instantly.
                </span>
              </a>

              {/* Physical details layout */}
              <ul className="space-y-3 mt-1 pl-1">
                <li>
                  <div className="flex items-start gap-3 p-2 -ml-2 rounded-lg hover:bg-white/2 transition-colors border border-transparent hover:border-white/4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-400">
                      <Clock className="w-4 h-4 animate-pulse" />
                    </div>
                    <div className="pt-0.5">
                      <span className="block text-[13px] font-bold text-red-400 uppercase tracking-widest leading-none mb-1">24/7 Emergency Care</span>
                      <span className="text-[13px] text-white/50 font-medium">Walk-ins welcome {siteInfo.hours.emergency}</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 p-2 -ml-2">
                    <div className="w-8 h-8 rounded-lg bg-white/3 flex items-center justify-center shrink-0 border border-white/5 text-white/40">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="pt-1">
                      <span className="block text-[13px] text-white/60 font-medium leading-relaxed">
                        {siteInfo.address.street}<br />
                        {siteInfo.address.city}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          LEGAL BAR
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-5 pb-20 md:pb-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-white/30 text-[13px] font-medium tracking-wide">
            © {year} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-medium tracking-wide">
            <Link href="/privacy" className="text-white/30 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
