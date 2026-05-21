import type { Metadata } from 'next';
import SIPCalculator from '@/components/calculators/SIPCalculator';

export const metadata: Metadata = {
  title: 'SIP Calculator — Calculate Your SIP Returns',
  description:
    'Use our free SIP calculator to estimate your mutual fund returns. Adjust monthly SIP amount, expected return, and duration to see your future wealth.',
};

export default function SIPCalculatorPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            SIP Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            See how your monthly SIP grows into significant wealth over time.
          </p>
        </div>
      </div>

      <section className="bg-brand-light py-16 px-4 min-h-screen">
        <SIPCalculator />
      </section>
    </>
  );
}
