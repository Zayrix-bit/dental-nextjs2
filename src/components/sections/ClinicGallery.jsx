import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: "/images/gallery/treatment_room.png",
    alt: "Modern dental treatment room"
  },
  {
    src: "/images/gallery/clinic_reception.png",
    alt: "Clean clinic reception and waiting area"
  },
  {
    src: "/images/gallery/equipment_close.png",
    alt: "Advanced dental equipment"
  },
  {
    src: "/images/gallery/consultation_room.png",
    alt: "Comfortable patient environment"
  }
];

export default function ClinicGallery() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3 sm:mb-4">
            A Clean, Comfortable Environment You Can Trust
          </h2>
          <p className="text-[16px] sm:text-[18px] text-slate-600 font-medium">
            Modern equipment and a comfortable, patient-friendly environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-12">
          {galleryImages.map((image, i) => (
            <div 
              key={i} 
              className="relative aspect-square sm:aspect-4/5 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-sm group"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="#appointment"
            className="group flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 bg-slate-950 hover:bg-emerald-500 text-white font-bold rounded-xl text-[15px] sm:text-[16px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-slate-900/10 hover:shadow-emerald-500/20"
          >
            Book Your Visit Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
