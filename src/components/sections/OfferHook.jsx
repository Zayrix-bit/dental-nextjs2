'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { offerData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function OfferHook() {
  if (!offerData) return null;

  return (
    <section id="offer" className="py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="offer-card-glow bg-linear-to-br from-secondary to-white rounded-3xl p-8 md:p-10 lg:p-12 border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden">

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent border border-accent/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    {offerData.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200/50 px-3 py-1.5 rounded-full text-xs font-bold">
                    <Clock className="w-3 h-3" />
                    {offerData.urgency}
                  </span>
                </div>

                {/* Headline */}
                <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-dark tracking-tight leading-tight">
                    {offerData.headline}
                  </h2>
                  <span className="text-lg font-bold text-slate-400 line-through whitespace-nowrap">
                    {offerData.value}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-light text-sm md:text-[0.95rem] leading-relaxed mb-8 max-w-2xl">
                  {offerData.description}
                </p>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {offerData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                      <span className="text-sm font-semibold text-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={offerData.ctaHref}
                    onClick={() => trackEvent(EVENTS.CTA_OFFER)}
                    className="btn-cta-green flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base"
                  >
                    {offerData.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-400 font-semibold text-center sm:text-left">
                    No credit card required • No obligation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
