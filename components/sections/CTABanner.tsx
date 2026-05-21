'use client';

import { motion, useReducedMotion } from 'framer-motion';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useLanguage } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-gold mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-gray-300 mb-8">
            Start your investment journey today with a free personalised consultation.
          </p>
          <WhatsAppButton label={t('cta.button')} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
