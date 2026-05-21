import type { Metadata } from 'next';
import { TrendingUp, BarChart2, Umbrella, Shield, PiggyBank, Layers, Target, BookOpen, Activity } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive financial services including mutual funds, SIP planning, retirement planning, insurance advisory, ELSS tax saving, and wealth management. AMFI ARN-353826.',
};

const services = [
  {
    icon: TrendingUp,
    title: 'Mutual Funds',
    desc: 'Diversified portfolio creation across equity, debt, and hybrid funds tailored to your risk profile and time horizon. We analyse your goals and build a portfolio that balances growth with stability across multiple fund categories.',
  },
  {
    icon: BarChart2,
    title: 'SIP Planning',
    desc: 'Systematic Investment Plans starting from ₹500/month. We help you pick the right fund, set the right SIP amount aligned to your goal, and stay on track through market ups and downs with periodic reviews.',
  },
  {
    icon: Umbrella,
    title: 'Retirement Planning',
    desc: 'Build a retirement corpus that sustains your lifestyle — we calculate your target corpus, account for inflation, and plan the precise SIP needed to get there. We also design post-retirement SWP (Systematic Withdrawal Plans).',
  },
  {
    icon: Shield,
    title: 'Insurance Advisory',
    desc: 'Life and health protection planning to safeguard your family against unforeseen events. We recommend term insurance for life cover and appropriate health floater policies — not endowment plans that mix insurance with poor returns.',
  },
  {
    icon: PiggyBank,
    title: 'Tax Saving (ELSS)',
    desc: 'Save up to ₹46,800 in tax annually under Section 80C by investing in Equity Linked Saving Schemes. With only a 3-year lock-in and equity-level returns of 12–15%, ELSS is the smartest 80C option for most investors.',
  },
  {
    icon: Layers,
    title: 'Wealth Management',
    desc: 'Holistic oversight of your entire financial portfolio — regular review, rebalancing, and optimisation. We ensure your asset allocation stays aligned to your goals as markets move and your life circumstances evolve.',
  },
  {
    icon: Target,
    title: 'Goal-Based Investing',
    desc: "Whether it's your child's education, a home purchase, or a dream vacation — we align your investments to specific life goals. Each goal gets its own fund, SIP amount, and time horizon so your money always has a purpose.",
  },
  {
    icon: BookOpen,
    title: 'Financial Planning',
    desc: 'Budgeting, cash flow planning, and emergency fund building as the foundation of your financial health. Before investing, we ensure you have the right financial base — zero bad debt, adequate emergency reserves.',
  },
  {
    icon: Activity,
    title: 'Risk Profiling',
    desc: 'Before recommending any fund, we assess your risk appetite, income stability, investment horizon, and financial goals to find the perfect match. Conservative, moderate, or aggressive — every profile has the right fund.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand-navy pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions for every stage of your wealth journey — from your first SIP to a comfortable retirement.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-brand-light py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-navy" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-lg font-bold text-brand-navy mb-3">{title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <div className="mt-6">
                  <WhatsAppButton
                    label={`Ask about ${title}`}
                    size="sm"
                    href={`https://wa.me/917574812332?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(title)}%20from%20MDRA%20Wealth.`}
                    className="w-full justify-center text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-brand-gold mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-gray-300 mb-8">
            Chat with Kushal Pal on WhatsApp for a free, no-obligation consultation. We&apos;ll understand your situation and recommend exactly what you need.
          </p>
          <WhatsAppButton label="Get a Free Consultation" size="lg" />
        </div>
      </section>
    </>
  );
}
