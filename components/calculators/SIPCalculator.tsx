'use client';

import { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n';
import { sipFormula, formatCurrency } from '@/lib/utils';

export default function SIPCalculator() {
  const { t } = useLanguage();
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const { invested, futureValue, returns, chartData } = useMemo(() => {
    const months = years * 12;
    const fv = sipFormula(monthly, rate, months);
    const inv = monthly * months;
    const chartData = Array.from({ length: years }, (_, i) => {
      const y = i + 1;
      const val = sipFormula(monthly, rate, y * 12);
      return {
        year: `Year ${y}`,
        invested: monthly * y * 12,
        value: Math.round(val),
      };
    });
    return { invested: inv, futureValue: Math.round(fv), returns: Math.round(fv - inv), chartData };
  }, [monthly, rate, years]);

  const SliderInput = ({
    label, value, min, max, step = 1, prefix = '', suffix = '',
    onChange,
  }: {
    label: string; value: number; min: number; max: number; step?: number;
    prefix?: string; suffix?: string; onChange: (v: number) => void;
  }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-brand-navy">{prefix}{value.toLocaleString('en-IN')}{suffix}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
        aria-label={label}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{prefix}{min.toLocaleString('en-IN')}{suffix}</span>
        <span>{prefix}{max.toLocaleString('en-IN')}{suffix}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-heading text-xl font-bold text-brand-navy mb-6">{t('calculator.sip.title')}</h2>

          <SliderInput
            label={t('calculator.sip.monthly')}
            value={monthly} min={500} max={100000} step={500}
            prefix="₹" onChange={setMonthly}
          />
          <SliderInput
            label={t('calculator.sip.rate')}
            value={rate} min={1} max={30}
            suffix="%" onChange={setRate}
          />
          <SliderInput
            label={t('calculator.sip.duration')}
            value={years} min={1} max={40}
            suffix=" yrs" onChange={setYears}
          />

          {/* Results */}
          <div className="grid grid-cols-1 gap-3 mt-4">
            {[
              { label: t('calculator.sip.invested'), value: formatCurrency(invested), color: 'brand-navy' },
              { label: t('calculator.sip.returns'), value: formatCurrency(returns), color: 'green-600' },
              { label: t('calculator.sip.future'), value: formatCurrency(futureValue), color: 'brand-gold' },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex justify-between items-center p-3 rounded-xl bg-brand-light">
                <span className="text-sm text-gray-600">{label}</span>
                <span className={`font-bold text-${color} font-heading`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading font-semibold text-brand-navy mb-4">Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C8972A" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#C8972A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1B2F6E" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1B2F6E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 10 }} />
              <YAxis tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="invested" name={t('calculator.sip.invested.label')} stroke="#1B2F6E" fill="url(#colorInvested)" strokeWidth={2} />
              <Area type="monotone" dataKey="value" name={t('calculator.sip.value.label')} stroke="#C8972A" fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <WhatsAppButton
              label={t('calculator.sip.cta')}
              size="sm"
              className="w-full justify-center text-xs"
              href={`https://wa.me/917574812332?text=Hi%2C%20I%20want%20to%20start%20a%20SIP%20of%20%E2%82%B9${monthly}%2Fmonth.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
