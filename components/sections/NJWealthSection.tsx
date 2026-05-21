'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export default function NJWealthSection() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: NJ Wealth logo placeholder */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {/* Replace with official NJ Wealth logo when available */}
            <div className="w-64 h-32 rounded-2xl bg-brand-navy flex items-center justify-center border-2 border-brand-gold/30 shadow-xl">
              <span className="text-2xl font-bold text-brand-gold font-heading">NJ Wealth</span>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              {t('nj.heading')}
            </h2>
            <p className="text-gray-600 mb-8">{t('nj.desc')}</p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: t('nj.stat1') },
                { stat: t('nj.stat2') },
                { stat: t('nj.stat3') },
              ].map(({ stat }) => (
                <div
                  key={stat}
                  className="rounded-xl border border-brand-navy/20 p-4 text-center"
                >
                  <p className="font-heading font-bold text-brand-navy text-lg leading-tight">{stat}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
