import Header from '@/components/layout/Header';
import { PageHeaderSkeleton } from '@/components/ui/SectionSkeletons';
import { Skeleton, SkeletonCard } from '@/components/ui/Skeleton';

export default function ServicesLoading() {
  return (
    <>
      <Header />
      <PageHeaderSkeleton />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
