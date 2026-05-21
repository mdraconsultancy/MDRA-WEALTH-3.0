'use client';

import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n';
import { sipFormula, formatCurrency } from '@/lib/utils';

export default function RetirementCalculator() {
  const { t } = useLanguage();
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [inflation, setInflation] = useState(6);
  const [expenses, setExpenses] = useState(50000);

  const result = useMemo(() => {
    const yearsToRetirement = retirementAge - currentAge;
    const months = yearsToRetirement * 12;
    const nominalCorpus = Math.round(sipFormula(monthly, rate, months));
    const inflationFactor = (1 + inflation / 100) ** yearsToRetirement;
    const adjustedExpenses = expenses * inflationFactor;
    const corpusNeeded = Math.round((adjustedExpenses * 12) / 0.04); // 4% SWR
    const postReturnMonthly = 8 / 100 / 12;
    const swp = Math.round(nominalCorpus * postReturnMonthly / (1 - (1 + postReturnMonthly) ** -300));

    const chartData = Array.from({ length: yearsToRetirement }, (_, i) => {
      const age = currentAge + i + 1;
      const nominal = Math.round(sipFormula(monthly, rate, (i + 1) * 12));
      const needed = Math.round(corpusNeeded * (1 - (inflationFactor - 1) * (yearsToRetirement - i - 1) / yearsToRetirement));
      return { age: `${age}`, nominal, needed: Math.max(needed, 0) };
    });

    return { yearsToRetirement, nominalCorpus, corpusNeeded, swp, chartData };
  }, [currentAge, retirementAge, monthly, rate, inflation, expenses]);

  const SliderInput = ({
    label, value, min, max, step = 1, prefix = '', suffix = '', onChange,
  }: {
    label: string; value: number; min: number; max: number; step?: number;
    prefix?: string; suffix?: string; onChange: (v: number) => void;
  }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-brand-navy">{prefix}{value.toLocaleString('en-IN')}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
        aria-label={label}
      />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-heading text-xl font-bold text-brand-navy mb-6">{t('calculator.retirement.title')}</h2>

          <SliderInput label={t('calculator.retirement.currentAge')} value={currentAge} min={18} max={60} onChange={setCurrentAge} suffix=" yrs" />
          <SliderInput label={t('calculator.retirement.retirementAge')} value={retirementAge} min={currentAge + 1} max={75} onChange={setRetirementAge} suffix=" yrs" />
          <SliderInput label={t('calculator.retirement.monthly')} value={monthly} min={1000} max={100000} step={1000} prefix="₹" onChange={setMonthly} />
          <SliderInput label={t('calculator.retirement.rate')} value={rate} min={6} max={20} onChange={setRate} suffix="%" />
          <SliderInput label={t('calculator.retirement.inflation')} value={inflation} min={3} max={12} onChange={setInflation} suffix="%" />
          <SliderInput label={t('calculator.retirement.expenses')} value={expenses} min={10000} max={500000} step={5000} prefix="₹" onChange={setExpenses} suffix="/mo" />

          {/* Results */}
          <div className="grid grid-cols-1 gap-3 mt-4">
            {[
              { label: t('calculator.retirement.years'), value: `${result.yearsToRetirement} years` },
              { label: t('calculator.retirement.corpus'), value: formatCurrency(result.nominalCorpus) },
              { label: t('calculator.retirement.adjusted'), value: formatCurrency(result.corpusNeeded) },
              { label: t('calculator.retirement.swp'), value: formatCurrency(result.swp) + '/mo' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center p-3 rounded-xl bg-brand-light">
                <span className="text-xs text-gray-600">{label}</span>
                <span className="font-bold text-brand-navy font-heading text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading font-semibold text-brand-navy mb-4">Corpus Growth vs Target</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={result.chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="age" tick={{ fontSize: 10 }} label={{ value: 'Age', position: 'insideBottom', offset: -3, fontSize: 11 }} />
              <YAxis tickFormatter={(v) => `₹${(v / 10000000).toFixed(1)}Cr`} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="nominal" name="Nominal Corpus" stroke="#C8972A" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="needed" name="Target Needed" stroke="#1B2F6E" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <WhatsAppButton
              label="Plan My Retirement"
              size="sm"
              className="w-full justify-center"
              href="https://wa.me/917574812332?text=Hi%2C%20I%20want%20to%20plan%20my%20retirement%20with%20MDRA%20Wealth."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
