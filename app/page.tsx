import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import NJWealthSection from '@/components/sections/NJWealthSection';
import PlannerTeaser from '@/components/sections/PlannerTeaser';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'MDRA Wealth | Managed Discipline & Research Advisory',
  description:
    'Expert mutual fund advisory, SIP planning, and retirement planning in Dadra & Nagar Haveli. AMFI registered distributor ARN-353826. Start your free consultation today.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FinancialService'],
  name: 'MDRA Wealth',
  url: 'https://mdrawealth.in',
  telephone: '+91-9316505125',
  email: 'mdraconsultancy@outlook.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ekta Complex, Khanvel',
    addressLocality: 'Dadra & Nagar Haveli',
    postalCode: '396230',
    addressCountry: 'IN',
  },
  description:
    'AMFI registered mutual fund distributor offering SIP planning, retirement planning, and wealth advisory services.',
  areaServed: 'IN',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesGrid />
      <NJWealthSection />
      <PlannerTeaser />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
