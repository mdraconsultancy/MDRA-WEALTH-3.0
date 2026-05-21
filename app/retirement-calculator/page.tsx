import type { Metadata } from 'next';
import RetirementCalculator from '@/components/calculators/RetirementCalculator';

export const metadata: Metadata = {
  title: 'Retirement Calculator — Plan Your Retirement Corpus',
  description:
    'Calculate how much you need to retire comfortably. Our retirement calculator factors in inflation, SIP returns, and SWP to show your retirement roadmap.',
};

export default function RetirementCalculatorPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Retirement Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            Find out exactly how much corpus you need and how to build it with a monthly SIP.
          </p>
        </div>
      </div>

      <section className="bg-brand-light py-16 px-4 min-h-screen">
        <RetirementCalculator />
      </section>
    </>
  );
}
