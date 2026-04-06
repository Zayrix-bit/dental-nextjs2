import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { doctorData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export default function DoctorSection() {
  if (!doctorData) return null;

  return (
    <section id="doctor" className="py-14 lg:py-20 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Doctor Image */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] max-h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src={doctorData.image}
                alt={`${doctorData.name} — ${doctorData.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <div className="bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl border border-white/60">
                  <h3 className="text-lg font-black text-text-dark tracking-tight">{doctorData.name}</h3>
                  <p className="text-xs font-semibold text-primary tracking-wide">{doctorData.title}</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Meet Your Dentist</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-dark tracking-tight leading-[1.1] mb-6">
                In Safe Hands. <span className="text-primary">Always.</span>
              </h2>

              {/* Story */}
              <p className="text-text-light text-[0.92rem] md:text-base leading-relaxed mb-8 max-w-lg">
                {doctorData.story}
              </p>

              {/* Credentials */}
              <div className="flex flex-col gap-3 mb-8">
                {(doctorData.credentials ?? []).map((cred, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" strokeWidth={2.5} />
                    <span className="text-sm font-semibold text-text-dark">{cred}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={doctorData.ctaHref}
                className="btn-cta-green inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm w-full sm:w-auto max-w-xs"
              >
                {doctorData.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
