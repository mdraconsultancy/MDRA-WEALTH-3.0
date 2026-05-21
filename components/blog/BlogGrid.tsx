'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/content/blog/types';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'SIP', 'Mutual Funds', 'Retirement', 'Insurance', 'Tax Saving', 'Wealth'];

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter blog posts by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              active === cat
                ? 'bg-brand-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-brand-gold/10 hover:text-brand-gold'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
