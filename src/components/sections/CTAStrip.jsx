'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { siteInfo } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-primary to-primary-dark py-10 lg:py-12">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dot-mesh" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left: Urgency Text */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-emergency-pulse" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Emergency Available</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Need a Dentist <span className="text-accent-light">Today?</span>
              </h2>
              <p className="text-sm text-white/60 font-medium mt-2 max-w-md mx-auto lg:mx-0">
                Don't wait in pain. Our team responds within 15 minutes. Walk-ins welcome.
              </p>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                onClick={() => trackEvent(EVENTS.CALL_CLICK, { location: 'cta_strip' })}
                className="flex items-center justify-center gap-2.5 bg-white text-primary font-bold px-7 py-3.5 rounded-xl text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 shadow-lg"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now — Immediate Relief
              </a>
              <Link
                href="#appointment"
                onClick={() => trackEvent(EVENTS.CTA_HERO_PRIMARY, { location: 'cta_strip' })}
                className="btn-cta-green flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm"
              >
                Book Online — 30 Seconds
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Response time subtext */}
          <div className="mt-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Average response time: 12 minutes
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
