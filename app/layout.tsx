import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/layout/LanguageProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdrawealth.in'),
  title: {
    template: '%s | MDRA Wealth',
    default: 'MDRA Wealth | Managed Discipline & Research Advisory',
  },
  description:
    'Expert mutual fund advisory, SIP planning, retirement planning and wealth management in Dadra & Nagar Haveli. AMFI registered ARN-353826.',
  keywords: [
    'mutual funds',
    'SIP planning',
    'retirement planning',
    'financial advisor',
    'MDRA Wealth',
    'Khanvel',
    'Dadra Nagar Haveli',
    'NJ Wealth partner',
    'ARN-353826',
  ],
  openGraph: {
    title: 'MDRA Wealth | Managed Discipline & Research Advisory',
    description:
      'Expert mutual fund advisory, SIP planning, retirement planning and wealth management in Dadra & Nagar Haveli. AMFI registered ARN-353826.',
    url: 'https://mdrawealth.in',
    siteName: 'MDRA Wealth',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDRA Wealth | Managed Discipline & Research Advisory',
    description:
      'Expert mutual fund advisory, SIP planning, retirement planning and wealth management in Dadra & Nagar Haveli.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://mdrawealth.in' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
