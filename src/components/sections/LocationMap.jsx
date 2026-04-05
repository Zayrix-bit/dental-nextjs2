import { siteInfo } from "@/data/siteData";
import ParallaxRing from '@/components/ui/ParallaxRing';

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] stroke-accent">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] stroke-accent">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.2 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] stroke-accent">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const NavigationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default function LocationMap({ className = "" }) {
  const query = encodeURIComponent(`${siteInfo.address.street}, ${siteInfo.address.city}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className={`pt-10 pb-20 lg:pt-16 lg:pb-24 bg-white relative overflow-hidden ${className}`}>
      {/* Lavender Donut Ring Accents */}
      <ParallaxRing className="absolute top-1/2 -left-20 w-[320px] h-[320px] opacity-60" ringStyle="bg-donut-ring" speed={0.18} animation="animate-float-slow" />
      <ParallaxRing className="absolute -top-20 -right-16 w-[280px] h-[280px] opacity-50" ringStyle="bg-donut-ring-lg" speed={0.1} animation="animate-spin-extra-slow" />
      <ParallaxRing className="absolute bottom-10 right-1/4 w-[150px] h-[150px] opacity-30" ringStyle="bg-donut-ring" speed={0.2} animation="animate-float-slow" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden relative z-10">

        {/* Header */}
        <div className="mb-10 lg:mb-14 max-w-3xl text-left">
          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-text-dark tracking-tight leading-[1.1] mb-4">
            Find Our <span className="text-primary">Clinic.</span>
          </h2>
          <p className="text-slate-500 text-[0.9rem] md:text-[1rem] leading-relaxed font-medium mb-4 max-w-2xl">
            Visit our modern facility for a comfortable, stress-free dental experience.
          </p>
          {/* Practical Info Badges */}
          <div className="flex flex-wrap gap-2">
            {['Easy parking', 'Near metro', 'Open 6 days'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 lg:gap-8 items-stretch">

          {/* Map Preview (Privacy-Friendly, No Cookies) */}
          <div className="w-full h-[300px] lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 bg-slate-100 relative group transition-shadow duration-300">
            {siteInfo.mapEmbedUrl ? (
              <iframe
                src={siteInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              /* Fallback if no embed URL */
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url('/images/hero-bg.png')`, opacity: 0.4 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                    <MapPinIcon />
                  </div>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs lg:text-sm font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-xl"
                  >
                    View on Google Maps
                    <NavigationIcon />
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Location Details Card */}
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
            <h3 className="text-lg lg:text-xl font-bold text-text-dark mb-5 tracking-tight">
              Clinic Details
            </h3>

            <div className="flex flex-col gap-5 lg:gap-6 mb-8 flex-1">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <strong className="block text-xs lg:text-[13px] font-extrabold text-text-dark tracking-wider uppercase mb-0.5">
                    Address
                  </strong>
                  <span className="text-[13px] lg:text-[14px] text-text-light leading-relaxed">
                    {siteInfo.address.street}<br />
                    {siteInfo.address.city}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <strong className="block text-xs lg:text-[13px] font-extrabold text-text-dark tracking-wider uppercase mb-0.5">
                    Phone
                  </strong>
                  <a href={`tel:${siteInfo.phoneRaw}`} className="text-[13px] lg:text-[14px] text-primary hover:text-primary-dark font-semibold transition-colors">
                    {siteInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <strong className="block text-xs lg:text-[13px] font-extrabold text-text-dark tracking-wider uppercase mb-0.5">
                    Hours
                  </strong>
                  <span className="text-[13px] lg:text-[14px] text-text-light leading-relaxed">
                    {siteInfo.hours.weekdays}<br />
                    {siteInfo.hours.saturday}
                  </span>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-[13px] lg:text-[14px] font-semibold py-3 px-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:-translate-y-0.5"
            >
              Get Directions
              <NavigationIcon />
            </a>
          </div>

        </div>
      </div>

      {/* ── Curved transition into Footer ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[50px] lg:h-[48px] block">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#060d12" />
        </svg>
      </div>
    </section>
  );
}
