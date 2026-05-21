import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function sipFormula(
  monthlyAmount: number,
  annualRate: number,
  months: number
): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return monthlyAmount * months;
  return monthlyAmount * (((1 + r) ** months - 1) / r) * (1 + r);
}

export const FUND_RATES: Record<string, number> = {
  Index: 11,
  'Large Cap': 12,
  'Mid Cap': 15,
  'Flexi Cap': 13,
  'Small Cap': 18,
  Sectoral: 12,
  Hybrid: 10,
};
