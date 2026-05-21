import type { Metadata } from 'next';
import { allPosts } from '@/content/blog';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Financial Insights & Investment Blog',
  description:
    'Expert articles on SIP investing, mutual funds, retirement planning, tax saving, and wealth management by Kushal Pal, AMFI registered distributor ARN-353826.',
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Financial Insights
          </h1>
          <p className="text-gray-300 text-lg">
            Practical guides and expert analysis to help you make smarter investment decisions.
          </p>
        </div>
      </div>

      <section className="bg-brand-light py-16 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <BlogGrid posts={allPosts} />
        </div>
      </section>
    </>
  );
}
