import type { Metadata } from 'next';
import { Shield, Eye, Heart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About MDRA Wealth',
  description:
    'Learn about MDRA Wealth, founded by Kushal Pal — AMFI registered mutual fund distributor ARN-353826 based in Dadra & Nagar Haveli.',
};

const milestones = [
  { year: '2024', month: 'March', event: 'MDRA Wealth founded by Kushal Pal in Khanvel, Dadra & Nagar Haveli.' },
  { year: '2025', month: 'October', event: 'Partnered with NJ Wealth, gaining access to India\'s largest MF distribution network.' },
  { year: '2026', month: 'March', event: 'Crossed 100 active SIP clients; launched personalised retirement planning service.' },
  { year: '2026', month: 'April', event: 'Expanded advisory to include ELSS, insurance guidance, and goal-based investing.' },
  { year: '2026', month: 'May', event: 'Launched Smart Planner tool.' },
];

const whyPoints = [
  {
    icon: Shield,
    title: 'Transparency',
    desc: 'We clearly explain every fund recommendation, its risk, and expected returns. No hidden charges or commissions undisclosed.',
  },
  {
    icon: Target,
    title: 'Personalisation',
    desc: 'Every client gets a plan built around their specific goals, income, risk profile, and time horizon — not a one-size-fits-all product.',
  },
  {
    icon: Eye,
    title: 'Long-term Focus',
    desc: 'We measure success in years and decades, not months. We actively discourage panic-selling and encourage patience.',
  },
  {
    icon: Heart,
    title: 'Trust',
    desc: 'As an AMFI registered distributor, we operate under SEBI\'s regulatory framework. Your investments are safe, transparent, and fully traceable.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero strip */}
      <div className="bg-brand-navy pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">About MDRA Wealth</h1>
          <p className="text-gray-300 text-lg">
            Helping Indian families build wealth through disciplined, goal-based investing since 2016.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="bg-brand-light py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To make quality financial advisory accessible to every Indian family — regardless of income level or
              financial literacy — through honest, personalised, and goal-oriented guidance.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A financially secure India, one SIP at a time. We envision a future where every Indian household
              has a systematic investment plan working for their retirement, education, and life goals.
            </p>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl">
                <span className="text-6xl font-bold text-brand-gold font-heading">KP</span>
              </div>
            </div>
            <div>

              <h2 className="font-heading text-3xl font-bold text-brand-navy mb-2">Kushal Pal</h2>
              <p className="text-brand-gold font-semibold mb-1">AMFI Registered Mutual Fund Distributor</p>
              <p className="text-sm text-gray-400 mb-4">Dadra &amp; Nagar Haveli</p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-brand-gold bg-brand-gold/5 mb-6">
                <Shield size={16} className="text-brand-gold" aria-hidden="true" />
                <span className="text-sm font-bold text-brand-navy">AMFI ARN-353826</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Kushal Pal is an AMFI-certified Mutual Fund Distributor with over 5 years of experience in
                personal finance advisory. Based in Khanvel, Dadra &amp; Nagar Haveli, he has guided 100+ clients
                across the region toward their financial goals through disciplined SIP investing and goal-based
                wealth planning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His approach is rooted in simplicity, transparency, and long-term thinking — believing that
                consistent investing in the right funds, started early, is the most reliable path to financial
                freedom for Indian families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MDRA Wealth */}
      <section className="bg-brand-light py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-brand-navy text-center mb-12">
            Why MDRA Wealth?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-navy" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-navy mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-brand-navy text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-gold/20" aria-hidden="true" />
            <div className="flex flex-col gap-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shrink-0 z-10">
                    <span className="text-brand-gold font-bold text-xs">{year}</span>
                  </div>
                  <div className="bg-brand-light rounded-xl p-4 flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
