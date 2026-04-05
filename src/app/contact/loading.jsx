import { PageHeaderSkeleton, ContactSkeleton } from '@/components/ui/SectionSkeletons';

export default function ContactLoading() {
  return (
    <>
      <PageHeaderSkeleton />
      <ContactSkeleton />
    </>
  );
}
