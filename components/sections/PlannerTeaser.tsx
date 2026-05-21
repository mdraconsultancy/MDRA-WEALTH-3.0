'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function PlannerTeaser() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-brand-navy py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('planner.heading')}
          </h2>
          <p className="text-gray-300 text-lg mb-8">{t('planner.subheading')}</p>
          <Link
            href="/smart-planner"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-white font-semibold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            {t('planner.cta')} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
