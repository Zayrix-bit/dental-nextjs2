import Header from '@/components/layout/Header';
import { PageHeaderSkeleton } from '@/components/ui/SectionSkeletons';
import { Skeleton } from '@/components/ui/Skeleton';

export default function GalleryLoading() {
  return (
    <>
      <Header />
      <PageHeaderSkeleton />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-full aspect-video lg:aspect-[21/9]" rounded="rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
