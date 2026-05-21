'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Shield, Users } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n';
import { formatCurrency } from '@/lib/utils';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReduced) { setCount(target); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, prefersReduced]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const fadeUp = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-navy/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-navy/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold mb-6">
                <Shield size={14} aria-hidden="true" /> AMFI Registered · ARN-353826
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t('hero.heading').split('. ').map((part, i) => (
                <span key={i}>
                  {i === 0 ? part + '.' : <><br /><span className="text-brand-gold">{part}</span></>}
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              {t('hero.subheading')}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <WhatsAppButton label={t('hero.cta1')} size="lg" />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 text-white hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
              >
                {t('hero.cta2')}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Users, value: 500, suffix: '+', label: 'Clients Served' },
                { icon: TrendingUp, value: 10, suffix: ' Cr+', label: 'Assets Guided' },
                { icon: Shield, value: 8, suffix: '+', label: 'Years Experience' },
              ].map(({ icon: Icon, value, suffix, label }) => (
                <div key={label} className="text-center">
                  <Icon size={20} className="text-brand-gold mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl font-bold text-white font-heading">
                    {label === 'Assets Guided' && '₹'}
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating glassmorphism cards */}
          <div className="hidden lg:flex flex-col gap-4 relative" aria-hidden="true">
            {[
              {
                label: 'SIP ₹5,000/mo × 20 yrs',
                value: formatCurrency(4996000),
                note: 'at 12% avg return',
                delay: 0.4,
              },
              {
                label: 'Retirement Corpus Goal',
                value: '₹2.5 Crore',
                note: 'by age 60, starting at 30',
                delay: 0.55,
              },
              {
                label: 'Tax Saved via ELSS',
                value: '₹46,800',
                note: 'per year under Sec 80C',
                delay: 0.7,
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial={prefersReduced ? {} : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="bg-white/10 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-5 shadow-xl"
              >
                <p className="text-xs text-gray-400 mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-brand-gold font-heading">{card.value}</p>
                <p className="text-xs text-gray-400 mt-1">{card.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
