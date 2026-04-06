'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { finalCtaData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function FinalCTA() {
  if (!finalCtaData) return null;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-[#0a4a44]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-light/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-dot-mesh opacity-10" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-emergency-pulse" />
              <span className="text-xs font-bold text-white/80 tracking-wide">
                {finalCtaData.urgency}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-black text-white tracking-tight leading-[1.1] mb-5">
              {finalCtaData.headline}
            </h2>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-white/60 font-medium leading-relaxed mb-10 max-w-xl mx-auto">
              {finalCtaData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href={finalCtaData.primaryCta.href}
                onClick={() => trackEvent(EVENTS.CTA_FINAL)}
                className="btn-cta-green flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold shadow-xl"
              >
                {finalCtaData.primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={finalCtaData.secondaryCta.href}
                onClick={() => trackEvent(EVENTS.CALL_CLICK, { location: 'final_cta' })}
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5" />
                {finalCtaData.secondaryCta.text}
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="flex items-center justify-center gap-4 mt-6 text-white/30 text-xs font-semibold">
              <span>✓ No wait time</span>
              <span>•</span>
              <span>✓ Pain-free guarantee</span>
              <span>•</span>
              <span>✓ Insurance accepted</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
