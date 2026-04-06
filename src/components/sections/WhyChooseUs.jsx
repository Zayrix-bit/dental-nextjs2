import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, CreditCard, Percent, Users, Microscope, Smile } from 'lucide-react';
import { features } from '@/data/siteData';
import config from '@/config';
import ScrollReveal from '@/components/ScrollReveal';

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'No Pain Guarantee',
    description: 'Advanced sedation & numbing — feel nothing during your procedure, or your visit is free.',
    color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    hoverColor: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
  },
  {
    icon: Zap,
    title: 'Same-Day Results',
    description: 'Whitening in 60 minutes. Emergency care within hours. Walk in, walk out with a smile.',
    color: 'bg-amber-50 border-amber-100 text-amber-600',
    hoverColor: 'group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'Know exactly what you pay before treatment. No surprise bills, no hidden fees. Ever.',
    color: 'bg-sky-50 border-sky-100 text-sky-600',
    hoverColor: 'group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600',
  },
  {
    icon: Percent,
    title: '0% EMI Available',
    description: 'Premium dental care shouldn\'t break the bank. Spread the cost with flexible payment plans.',
    color: 'bg-violet-50 border-violet-100 text-violet-600',
    hoverColor: 'group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-14 lg:py-20 bg-clinical overflow-hidden">
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Why Patients Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-dark tracking-tight leading-[1.1] mb-4">
              {config.about.heading} <span className="text-primary">{config.about.headingAccent}</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-[0.95rem] leading-relaxed font-medium">
              {config.about.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-5 mb-12 lg:mb-16">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-7 border border-slate-100 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-center items-center text-center">
                  <div className={`w-10 h-10 lg:w-13 lg:h-13 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 border transition-all duration-300 ${item.color} ${item.hoverColor}`}>
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[0.85rem] lg:text-base font-bold text-text-dark tracking-tight mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] lg:text-sm text-text-light leading-[1.5] lg:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Features + Image Split */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Feature List (Hidden on Mobile, moved to bottom) */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="flex gap-3.5 p-4 rounded-xl bg-white border border-slate-50 hover:border-primary/10 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0">
                      <FeatIcon className="w-4.5 h-4.5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-dark tracking-tight">{feat.title}</h4>
                      <p className="text-xs text-text-light mt-1 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Team Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src={config.images.teamPhoto}
                alt={`The ${config.name} team`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />

              {/* Years Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-xl shadow-lg border border-white/60">
                <div className="text-2xl font-black text-primary leading-none">{config.about.yearsBadge.number}{config.about.yearsBadge.suffix}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{config.about.yearsBadge.label} {config.about.yearsBadge.sublabel}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile-Only Feature Stats (Appears under Doctor Team Photo & above Testimonials) */}
        <div className="grid grid-cols-2 lg:hidden gap-2 mt-8 mb-4 max-w-2xl mx-auto w-full">
          {[
            {
              icon: Microscope,
              title: "10,000+ Successful Treatments",
              desc: "Proven track record with thousands of happy, returning patients.",
            },
            {
              icon: Users,
              title: "Certified & Experienced Dentists",
              desc: "Board-certified specialists with 15+ years of hands-on experience.",
            },
            {
              icon: Smile,
              title: "Pain-Free Procedures",
              desc: "Advanced anesthesia and sedation so you feel nothing during treatment.",
            },
            {
              icon: CreditCard,
              title: "State-of-the-Art Technology",
              desc: "Utilizing 3D imaging and precision diagnostics to craft the perfect treatment plan.",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col items-start gap-2.5 w-full hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#E8F3F1] flex items-center justify-center text-primary">
                  <Icon className="w-4 h-4" strokeWidth={2.2} />
                </div>
                <div className="w-full">
                  <h4 className="text-[12px] font-extrabold text-slate-900 leading-snug mb-1">{feature.title}</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group"
            >
              Learn More About Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
