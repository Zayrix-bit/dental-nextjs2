import { processData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProcessSection() {
  if (!processData) return null;

  return (
    <section id="process" className="py-14 lg:py-20 bg-clinical relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-dark leading-[1.1] tracking-tight mb-4">
              {processData.heading} <span className="text-primary">{processData.headingAccent}</span>
            </h2>
            <p className="text-slate-500 text-[0.92rem] md:text-base leading-relaxed font-medium">
              {processData.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {processData.steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="relative group">
                  {/* Connector line (desktop only) */}
                  {idx < processData.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%+2px)] w-[calc(100%-20px)] h-px">
                      <div className="w-full h-full bg-linear-to-r from-primary/20 to-transparent" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 text-center lg:text-left h-full flex flex-col">
                    {/* Step number */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <StepIcon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                      </div>
                      <span className="text-3xl font-black text-primary/15 group-hover:text-primary/25 transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base lg:text-lg font-bold text-text-dark mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
