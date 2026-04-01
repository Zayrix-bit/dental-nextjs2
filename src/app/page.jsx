import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { HeroSkeleton, ServicesSkeleton, TestimonialsSkeleton, BeforeAfterSkeleton, GenericSkeleton } from '@/components/ui/SectionSkeletons';

const Services = dynamic(() => import('@/components/sections/Services'), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
});

// Lazy load heavy components
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
});

const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter'), {
  loading: () => <BeforeAfterSkeleton />,
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <GenericSkeleton height="600px" />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <GenericSkeleton height="800px" />,
  ssr: true,
});

const LocationMap = dynamic(() => import('@/components/sections/LocationMap'), {
  loading: () => <GenericSkeleton height="500px" />,
  ssr: true,
});

export const metadata = {
  title: 'Premium Dental Care in New York',
  description: 'Experience the perfect synthesis of advanced technology and compassionate care. Book an appointment today for exceptional dental services.',
  alternates: {
    canonical: '/',
  }
};


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services isHomePage={true} />
        <WhyChooseUs />
        <Testimonials />
        <BeforeAfter />
        <FAQ />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
