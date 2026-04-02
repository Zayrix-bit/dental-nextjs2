import Header from '@/components/layout/Header';
import { PageHeaderSkeleton } from '@/components/ui/SectionSkeletons';
import { Skeleton, SkeletonText, SkeletonCircle } from '@/components/ui/Skeleton';

export default function TestimonialsLoading() {
  return (
    <>
      <Header />
      <PageHeaderSkeleton />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <SkeletonCircle size={44} />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
