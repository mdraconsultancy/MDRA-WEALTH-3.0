'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, BarChart2, Umbrella, Shield, PiggyBank, Layers, Target, BookOpen, Activity } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

const icons = [TrendingUp, BarChart2, Umbrella, Shield, PiggyBank, Layers, Target, BookOpen, Activity];

export default function ServicesGrid() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const services = Array.from({ length: 9 }, (_, i) => ({
    icon: icons[i],
    title: t(`services.${i + 1}.title`),
    desc: t(`services.${i + 1}.desc`),
  }));

  return (
    <section className="bg-brand-light py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">{t('services.subheading')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors">
                <Icon size={22} className="text-brand-navy group-hover:text-brand-gold transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-navy mb-2">{title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{desc}</p>
              <Link
                href="/services"
                className="text-sm font-semibold text-brand-gold hover:underline"
              >
                {t('services.learnMore')} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
