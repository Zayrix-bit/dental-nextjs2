import Skeleton from './Skeleton';

export function HeroSkeleton() {
  return (
    <div className="relative min-h-[65svh] lg:min-h-[78svh] flex items-center bg-[#0d2733]">
       <div className="max-w-[1200px] mx-auto px-6 w-full py-16 md:py-24">
         <Skeleton width="180px" height="32px" rounded="rounded-full" className="mb-8 opacity-20" />
         <Skeleton width="70%" height="60px" className="mb-6 opacity-30" />
         <Skeleton width="50%" height="24px" className="mb-10 opacity-20" />
         <div className="flex gap-4">
           <Skeleton width="160px" height="52px" rounded="rounded-full" className="opacity-30" />
           <Skeleton width="160px" height="52px" rounded="rounded-full" className="opacity-20" />
         </div>
       </div>
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <Skeleton width="240px" height="40px" className="mb-4" />
        <Skeleton width="400px" height="20px" className="mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-0 overflow-hidden shadow-sm border border-slate-100">
              <Skeleton width="100%" height="auto" className="aspect-4/3" rounded="rounded-none" />
              <div className="p-4">
                <Skeleton width="80%" height="18px" className="mb-3" />
                <Skeleton width="100%" height="12px" className="mb-2" />
                <Skeleton width="60%" height="12px" className="mb-4" />
                <Skeleton width="30%" height="10px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
     <section className="py-16 lg:py-24 bg-bg-light overflow-hidden">
       <div className="max-w-[1200px] mx-auto px-6">
         <Skeleton width="200px" height="40px" className="mb-16" />
         <div className="flex gap-6 overflow-hidden">
           {[...Array(3)].map((_, i) => (
             <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shrink-0 w-[420px] shadow-sm">
                <div className="flex gap-3 mb-6">
                  <Skeleton width="40px" height="40px" rounded="rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton width="120px" height="14px" />
                    <Skeleton width="80px" height="10px" />
                  </div>
                </div>
                <Skeleton width="100%" height="12px" className="mb-2" />
                <Skeleton width="100%" height="12px" className="mb-2" />
                <Skeleton width="70%" height="12px" />
             </div>
           ))}
         </div>
       </div>
     </section>
  );
}

export function BeforeAfterSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <Skeleton width="280px" height="40px" className="mb-12" />
        <Skeleton width="100%" height="auto" rounded="rounded-2xl" className="aspect-video lg:aspect-21/9" />
      </div>
    </section>
  );
}

export function GenericSkeleton({ height = '400px' }) {
  return (
    <div className="w-full bg-slate-50 relative overflow-hidden" style={{ minHeight: height }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col gap-6">
        <Skeleton width="200px" height="32px" />
        <Skeleton width="100%" height="24px" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           <Skeleton width="100%" height="200px" rounded="rounded-2xl" />
           <Skeleton width="100%" height="200px" rounded="rounded-2xl" />
           <Skeleton width="100%" height="200px" rounded="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
