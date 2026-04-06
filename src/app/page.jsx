import dynamic from 'next/dynamic';
import config from '@/config';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import CTAStrip from '@/components/sections/CTAStrip';
import Services from '@/components/sections/Services';

// Dynamic imports for below-the-fold sections
const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter'), {
  loading: () => <SectionSkeleton height="h-96" />,
});
const DoctorSection = dynamic(() => import('@/components/sections/DoctorSection'), {
  loading: () => <SectionSkeleton height="h-80" />,
});
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), {
  loading: () => <SectionSkeleton height="h-80" />,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <SectionSkeleton height="h-72" />,
});
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), {
  loading: () => <SectionSkeleton height="h-64" />,
});
const OfferHook = dynamic(() => import('@/components/sections/OfferHook'), {
  loading: () => <SectionSkeleton height="h-64" />,
});
const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <SectionSkeleton height="h-80" />,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton height="h-96" />,
});
const LocationMap = dynamic(() => import('@/components/sections/LocationMap'), {
  loading: () => <SectionSkeleton height="h-64" />,
});

export const metadata = {
  title: config.pages?.home?.title || `${config.name} — ${config.tagline}`,
  description: config.pages?.home?.description || config.seo.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — conversion-first with urgency */}
      <Hero />

      {/* 2. Trust Bar — immediate social proof */}
      <TrustBar />

      {/* 3. CTA Strip — emergency/urgency */}
      <CTAStrip />

      {/* 4. Services — Problem → Solution format */}
      <Services variant="homepage" />

      {/* 5. Before/After — visual proof */}
      <BeforeAfter />

      {/* 6. Doctor Section — personal trust */}
      <DoctorSection />

      {/* 7. Why Choose Us — differentiation */}
      <WhyChooseUs />

      {/* 8. Testimonials — social proof */}
      <Testimonials />

      {/* 9. Process — fear-reducing steps */}
      <ProcessSection />

      {/* 10. Offer Hook — conversion trigger */}
      <OfferHook />

      {/* 11. FAQ — objection handling */}
      <FAQ />

      {/* 13. Contact Form — lead capture */}
      <Contact />

      {/* 14. Location Map */}
      <LocationMap />
    </>
  );
}

/**
 * Skeleton placeholder while lazy sections load.
 */
function SectionSkeleton({ height = 'h-64' }) {
  return (
    <div className={`${height} w-full flex items-center justify-center bg-bg-section`}>
      <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}
