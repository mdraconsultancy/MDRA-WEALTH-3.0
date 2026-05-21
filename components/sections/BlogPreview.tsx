'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { allPosts } from '@/content/blog';
import BlogCard from '@/components/blog/BlogCard';

export default function BlogPreview() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const recent = allPosts.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            {t('blog.heading')}
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-gold hover:underline"
          >
            {t('blog.viewAll')} →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
