'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n';
import { formatCurrency } from '@/lib/utils';

interface PlannerResultProps {
  result: {
    invested: number;
    returns: number;
    projected: number;
    data: {
      name: string;
      financialGoal: string;
      monthlyInvestment: number;
      fundCategory: string;
    };
  };
  toast: string;
}

export default function PlannerResult({ result, toast }: PlannerResultProps) {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const waMsg = encodeURIComponent(
    `Hi, I used the MDRA Wealth Smart Planner. My goal is ${result.data.financialGoal}, monthly investment ₹${result.data.monthlyInvestment}, preferred fund: ${result.data.fundCategory}. Projected value: ${formatCurrency(result.projected)}. Can we discuss this plan?`
  );

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6 text-sm"
        >
          <CheckCircle size={16} aria-hidden="true" /> {toast}
        </motion.div>
      )}

      <h2 className="font-heading text-2xl font-bold text-brand-navy mb-2">
        Here&apos;s your plan, {result.data.name}!
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Based on your inputs — {result.data.financialGoal} goal with {result.data.fundCategory} fund.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {[
          { label: t('planner.result.invested'), value: formatCurrency(result.invested), bg: 'bg-brand-light', text: 'text-brand-navy' },
          { label: t('planner.result.returns'), value: formatCurrency(result.returns), bg: 'bg-green-50', text: 'text-green-700' },
          { label: t('planner.result.projected'), value: formatCurrency(result.projected), bg: 'bg-brand-gold/10', text: 'text-brand-gold' },
        ].map(({ label, value, bg, text }) => (
          <div key={label} className={`${bg} rounded-2xl p-5 flex justify-between items-center`}>
            <span className="text-sm text-gray-600">{label}</span>
            <span className={`font-heading font-bold text-2xl ${text}`}>{value}</span>
          </div>
        ))}
      </div>

      <WhatsAppButton
        label={t('planner.result.cta')}
        size="lg"
        className="w-full justify-center mb-6"
        href={`https://wa.me/917574812332?text=${waMsg}`}
      />

      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs text-amber-700 leading-relaxed">{t('planner.result.disclaimer')}</p>
      </div>
    </motion.div>
  );
}
