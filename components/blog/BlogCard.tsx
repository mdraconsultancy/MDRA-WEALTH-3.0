import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { BlogPost } from '@/content/blog/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/20 transition-all duration-200 overflow-hidden h-full flex flex-col">
      {/* Gradient image placeholder */}
      <div
        className="h-44 bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="text-brand-gold/20 text-6xl font-bold font-heading">
          {post.title.charAt(0)}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <Badge>{post.category}</Badge>
        </div>

        <h3 className="font-heading font-bold text-brand-navy text-base leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <User size={12} aria-hidden="true" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} aria-hidden="true" /> {post.readTime}
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-brand-gold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
