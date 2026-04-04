/**
 * Section-Specific Skeleton Components
 * ─────────────────────────────────────
 * Each skeleton mirrors the exact layout of its real component
 * to prevent layout shift when content loads.
 */
import { Skeleton, SkeletonText, SkeletonCircle, SkeletonButton, SkeletonCard } from './Skeleton';

/* ═══════════════════════════════════════
   HERO SKELETON
   ═══════════════════════════════════════ */
export function HeroSkeleton() {
  return (
    <div className="relative h-svh flex flex-col overflow-hidden bg-slate-900">
      {/* Shimmer background fill */}
      <Skeleton className="absolute inset-0 opacity-20" rounded="rounded-none" />
      
      <div className="relative z-10 flex-1 flex flex-col justify-start sm:justify-center max-w-[1300px] mx-auto w-full px-6 md:px-8 lg:px-12 pt-22 pb-6 sm:pt-20 sm:pb-8">
        <div className="max-w-2xl xl:max-w-[680px]">
          {/* Badge */}
          <Skeleton className="h-9 w-48 opacity-20" rounded="rounded-full" />
          
          {/* Heading */}
          <Skeleton className="h-12 sm:h-14 md:h-16 w-[85%] mt-7 opacity-25" />
          <Skeleton className="h-12 sm:h-14 md:h-16 w-[55%] mt-2 opacity-25" />
          
          {/* Subtitle */}
          <div className="mt-5 flex flex-col gap-2">
            <Skeleton className="h-4 w-full max-w-[320px] sm:max-w-md opacity-15" />
            <Skeleton className="h-4 w-[90%] max-w-[290px] sm:max-w-sm opacity-15" />
            <Skeleton className="h-4 w-[70%] max-w-[220px] sm:max-w-xs opacity-15" />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
            <Skeleton className="h-13 sm:h-12 w-full sm:w-48 opacity-25" rounded="rounded-2xl sm:rounded-xl" />
            <Skeleton className="h-13 sm:h-12 w-full sm:w-44 opacity-15" rounded="rounded-2xl sm:rounded-xl" />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-x-4 md:gap-x-8 mt-8 pt-6 border-t border-white/10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <Skeleton className="h-6 sm:h-7 w-[70%] opacity-20" />
                <Skeleton className="h-2.5 w-[90%] opacity-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SERVICES SKELETON
   ═══════════════════════════════════════ */
export function ServicesSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-bg-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <Skeleton className="h-9 w-64 mb-3" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TESTIMONIALS SKELETON
   ═══════════════════════════════════════ */
export function TestimonialsSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <Skeleton className="h-9 w-56 mb-12" />
        
        <div className="flex gap-6 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 shrink-0 w-full sm:w-[380px] shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <SkeletonCircle size={44} />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="w-3.5 h-3.5" rounded="rounded-sm" />
                  ))}
                </div>
              </div>
              {/* Body */}
              <SkeletonText lines={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   BEFORE/AFTER SKELETON
   ═══════════════════════════════════════ */
export function BeforeAfterSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-bg-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <Skeleton className="h-9 w-72 mb-12" />
        <Skeleton className="w-full aspect-video lg:aspect-[21/9]" rounded="rounded-2xl" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FAQ SKELETON
   ═══════════════════════════════════════ */
export function FAQSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-9 w-64 mx-auto mb-3" />
          <Skeleton className="h-4 w-80 mx-auto max-w-full" />
        </div>
        <div className="flex flex-col gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-5 flex items-center justify-between">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="w-5 h-5 shrink-0 ml-4" rounded="rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CONTACT SKELETON
   ═══════════════════════════════════════ */
export function ContactSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-bg-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <Skeleton className="h-8 w-56 mb-6" />
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-12" rounded="rounded-xl" />
                <Skeleton className="h-12" rounded="rounded-xl" />
              </div>
              <Skeleton className="h-12" rounded="rounded-xl" />
              <Skeleton className="h-12" rounded="rounded-xl" />
              <Skeleton className="h-32" rounded="rounded-xl" />
              <Skeleton className="h-13 w-full" rounded="rounded-xl" />
            </div>
          </div>
          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <Skeleton className="h-48" rounded="rounded-2xl" />
            <Skeleton className="h-36" rounded="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   LOCATION MAP SKELETON
   ═══════════════════════════════════════ */
export function LocationMapSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <Skeleton className="h-9 w-48 mb-8" />
        <Skeleton className="w-full h-80 lg:h-96" rounded="rounded-2xl" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PAGE HEADER SKELETON (sub-pages)
   ═══════════════════════════════════════ */
export function PageHeaderSkeleton() {
  return (
    <div className="bg-bg-section py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto max-w-full" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   BLOG CARDS SKELETON
   ═══════════════════════════════════════ */
export function BlogCardsSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
