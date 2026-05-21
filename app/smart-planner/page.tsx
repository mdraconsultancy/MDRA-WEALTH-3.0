import type { Metadata } from 'next';
import SmartPlannerForm from '@/components/planner/SmartPlannerForm';

export const metadata: Metadata = {
  title: 'Smart Planner — Plan Your Wealth in 2 Minutes',
  description:
    'Use the MDRA Wealth Smart Planner to get a personalised mutual fund investment plan in just 2 minutes. Tell us your goal and we\'ll show you the path.',
};

export default function SmartPlannerPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Smart Planner
          </h1>
          <p className="text-gray-300 text-lg">
            Answer 9 quick questions and see your personalised investment projection instantly.
          </p>
        </div>
      </div>

      <section className="bg-brand-light min-h-screen py-16 px-4">
        <SmartPlannerForm />
      </section>
    </>
  );
}
