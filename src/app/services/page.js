import config from '@/config';
import PageHeader from '@/components/ui/PageHeader';
import Services from '@/components/sections/Services';




export const metadata = {
  title: config.pages.services.title,
  description: config.pages.services.description,
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title={config.pages.services.pageHeader.title}
        description={config.pages.services.pageHeader.description}
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
}
