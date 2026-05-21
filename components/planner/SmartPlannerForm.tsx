'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { sipFormula, FUND_RATES } from '@/lib/utils';
import PlannerResult from './PlannerResult';

interface FormData {
  name: string;
  age: string;
  contactNumber: string;
  email: string;
  financialGoal: string;
  monthlyInvestment: string;
  investmentDuration: number;
  riskProfile: 'conservative' | 'moderate' | 'aggressive';
  fundCategory: string;
}

const GOALS = [
  'Retirement', "Child's Education", 'Home Purchase',
  'Wealth Creation', 'Emergency Fund', 'Marriage', 'Other',
];
const DURATIONS = [10, 12, 24, 36];
const FUND_CATEGORIES = [
  { value: 'Index', desc: 'Tracks Nifty/Sensex, low cost, ~11% avg returns' },
  { value: 'Large Cap', desc: 'Top 100 companies, stable, ~12% avg' },
  { value: 'Mid Cap', desc: 'High growth potential, moderate risk, ~15% avg' },
  { value: 'Flexi Cap', desc: 'Mix of all sizes, flexible allocation, ~13% avg' },
  { value: 'Small Cap', desc: 'Highest growth, highest risk, ~18% avg' },
  { value: 'Sectoral', desc: 'Theme-based (IT, Pharma etc.), volatile' },
  { value: 'Hybrid', desc: 'Mix of equity + debt, balanced, ~10% avg' },
];
const TOTAL_STEPS = 9;

function validate(step: number, data: FormData): string {
  if (step === 1 && data.name.trim().length < 2) return 'Name must be at least 2 characters.';
  if (step === 2) {
    const age = parseInt(data.age, 10);
    if (isNaN(age) || age < 18 || age > 80) return 'Age must be between 18 and 80.';
  }
  if (step === 3 && !/^[6-9]\d{9}$/.test(data.contactNumber))
    return 'Enter a valid 10-digit Indian mobile number.';
  if (step === 4 && data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return 'Enter a valid email address.';
  if (step === 5 && !data.financialGoal) return 'Please select a goal.';
  if (step === 6) {
    const amt = parseInt(data.monthlyInvestment, 10);
    if (isNaN(amt) || amt < 500) return 'Minimum investment is ₹500/month.';
  }
  return '';
}

export default function SmartPlannerForm() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const [step, setStep] = useState(1);
  const [fieldError, setFieldError] = useState('');
  const [done, setDone] = useState(false);
  const [toast, setToast] = useState('');
  const [result, setResult] = useState<{
    invested: number; returns: number; projected: number;
    data: { name: string; financialGoal: string; monthlyInvestment: number; fundCategory: string };
  } | null>(null);

  const [form, setForm] = useState<FormData>({
    name: '', age: '', contactNumber: '', email: '',
    financialGoal: '', monthlyInvestment: '',
    investmentDuration: 12, riskProfile: 'moderate', fundCategory: 'Flexi Cap',
  });

  const set = (key: keyof FormData, value: string | number) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const nextStep = () => {
    const err = validate(step, form);
    if (err) { setFieldError(err); return; }
    setFieldError('');
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else submitForm();
  };

  const prevStep = () => { setFieldError(''); setStep((s) => Math.max(s - 1, 1)); };

  const skipEmail = () => { setFieldError(''); set('email', ''); setStep((s) => s + 1); };

  const submitForm = async () => {
    const rate = FUND_RATES[form.fundCategory] ?? 12;
    const monthly = parseInt(form.monthlyInvestment, 10);
    const fv = sipFormula(monthly, rate, form.investmentDuration);
    const invested = monthly * form.investmentDuration;
    const projected = Math.round(fv);

    setResult({
      invested,
      returns: projected - invested,
      projected,
      data: {
        name: form.name,
        financialGoal: form.financialGoal,
        monthlyInvestment: monthly,
        fundCategory: form.fundCategory,
      },
    });
    setDone(true);

    try {
      const res = await fetch('/api/submit-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          age: parseInt(form.age, 10),
          contactNumber: form.contactNumber,
          email: form.email || undefined,
          financialGoal: form.financialGoal,
          monthlyInvestment: monthly,
          investmentDuration: form.investmentDuration,
          riskProfile: form.riskProfile,
          fundCategory: form.fundCategory,
          projectedValue: projected,
        }),
      });
      if (res.ok) {
        setToast(t('planner.saved'));
        setTimeout(() => setToast(''), 4000);
      }
    } catch (err) {
      console.error('Failed to save planner submission:', err);
    }
  };

  if (done && result) return <PlannerResult result={result} toast={toast} />;

  const slideVariants = prefersReduced
    ? {}
    : { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -40 } };

  const inputCls =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold';
  const optionCls = (active: boolean) =>
    `px-4 py-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
      active ? 'border-brand-gold bg-brand-gold/5 text-brand-navy' : 'border-gray-200 text-gray-600 hover:border-brand-gold/40'
    }`;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Step {step} of {TOTAL_STEPS}</span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-gold rounded-full"
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} {...slideVariants} transition={{ duration: 0.25 }}>

          {step === 1 && (
            <StepWrap label={t('planner.step1.label')}>
              <input autoFocus value={form.name} onChange={(e) => set('name', e.target.value)}
                placeholder="e.g. Rahul Sharma" className={inputCls} />
            </StepWrap>
          )}

          {step === 2 && (
            <StepWrap label={t('planner.step2.label')}>
              <input autoFocus type="number" min={18} max={80} value={form.age}
                onChange={(e) => set('age', e.target.value)}
                placeholder="e.g. 28" className={inputCls} />
            </StepWrap>
          )}

          {step === 3 && (
            <StepWrap label={t('planner.step3.label')}>
              <input autoFocus type="tel" maxLength={10} value={form.contactNumber}
                onChange={(e) => set('contactNumber', e.target.value)}
                placeholder={t('planner.step3.placeholder')} className={inputCls} />
            </StepWrap>
          )}

          {step === 4 && (
            <StepWrap label={t('planner.step4.label')}>
              <input autoFocus type="email" value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@example.com" className={inputCls} />
            </StepWrap>
          )}

          {step === 5 && (
            <StepWrap label={t('planner.step5.label')}>
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map((goal) => (
                  <button key={goal} type="button" onClick={() => set('financialGoal', goal)}
                    className={optionCls(form.financialGoal === goal)}>
                    {goal}
                  </button>
                ))}
              </div>
            </StepWrap>
          )}

          {step === 6 && (
            <StepWrap label={t('planner.step6.label')}>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input autoFocus type="number" min={500} value={form.monthlyInvestment}
                  onChange={(e) => set('monthlyInvestment', e.target.value)}
                  placeholder={t('planner.step6.placeholder')}
                  className={`${inputCls} pl-8`} />
              </div>
            </StepWrap>
          )}

          {step === 7 && (
            <StepWrap label={t('planner.step7.label')}>
              <div className="grid grid-cols-2 gap-3">
                {DURATIONS.map((d) => (
                  <button key={d} type="button" onClick={() => set('investmentDuration', d)}
                    className={optionCls(form.investmentDuration === d)}>
                    {d} months
                  </button>
                ))}
              </div>
            </StepWrap>
          )}

          {step === 8 && (
            <StepWrap label={t('planner.step8.label')}>
              <div className="flex flex-col gap-3">
                {(['conservative', 'moderate', 'aggressive'] as const).map((risk) => (
                  <button key={risk} type="button" onClick={() => set('riskProfile', risk)}
                    className={optionCls(form.riskProfile === risk)}>
                    <p className="font-semibold text-brand-navy text-sm capitalize">{t(`planner.risk.${risk}`)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t(`planner.risk.${risk}.desc`)}</p>
                  </button>
                ))}
              </div>
            </StepWrap>
          )}

          {step === 9 && (
            <StepWrap label={t('planner.step9.label')}>
              <div className="flex flex-col gap-2">
                {FUND_CATEGORIES.map(({ value, desc }) => (
                  <button key={value} type="button" onClick={() => set('fundCategory', value)}
                    className={optionCls(form.fundCategory === value)}>
                    <p className="font-semibold text-brand-navy text-sm">{value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                  </button>
                ))}
              </div>
            </StepWrap>
          )}

          {fieldError && (
            <p className="text-red-500 text-xs mt-3">{fieldError}</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          aria-label="Previous step"
          className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={16} aria-hidden="true" /> {t('planner.back')}
        </button>

        <div className="flex items-center gap-3">
          {step === 4 && (
            <button type="button" onClick={skipEmail}
              className="text-sm text-gray-400 hover:text-gray-600 underline">
              {t('planner.step4.skip')}
            </button>
          )}
          {step < TOTAL_STEPS ? (
            <button type="button" onClick={nextStep}
              className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-brand-navy text-white text-sm font-semibold hover:bg-brand-gold transition-all">
              {t('planner.next')} <ChevronRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button type="button" onClick={nextStep}
              className="px-6 py-2.5 rounded-full bg-brand-gold text-white text-sm font-semibold hover:brightness-110 transition-all">
              {t('planner.submit')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepWrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-brand-navy mb-5">{label}</h2>
      {children}
    </div>
  );
}
