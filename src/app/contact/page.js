import config from '@/config';
import PageHeader from '@/components/ui/PageHeader';
import ExtendedContact from '@/components/sections/ExtendedContact';
import LocationMap from '@/components/sections/LocationMap';


export const metadata = {
  title: config.pages.contact.title,
  description: config.pages.contact.description,
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title={config.pages.contact.pageHeader.title}
        description={config.pages.contact.pageHeader.description}
      />
      <div className="bg-[var(--color-bg-light)]">
        <ExtendedContact />
      </div>
      <LocationMap />
    </>
  );
}
