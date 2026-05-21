'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const testimonials = [
  {
    quote:
      'Kushal bhai helped me start my first SIP just 2 years ago. Already seeing great returns and I feel so much more confident about my retirement.',
    name: 'Ramesh Patel',
    city: 'Silvassa',
    rating: 5,
  },
  {
    quote:
      "I had no idea about mutual funds before MDRA Wealth. They explained everything patiently and set up a plan for my daughter's education. Highly recommended!",
    name: 'Priya Sharma',
    city: 'Surat',
    rating: 5,
  },
  {
    quote:
      'The Smart Planner tool is amazing. In 2 minutes I could see exactly how my ₹8,000/month SIP will grow. Professional service, no pressure.',
    name: 'Anil Mehta',
    city: 'Vapi',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            {t('testimonials.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-brand-gold/20 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-brand-navy text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
