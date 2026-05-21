import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { allPosts, getPostBySlug, getRelatedPosts } from '@/content/blog';
import Badge from '@/components/ui/Badge';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import BlogCard from '@/components/blog/BlogCard';
import ShareButtons from './ShareButtons';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);
  const postUrl = `https://mdrawealth.in/blog/${post.slug}`;
  const waShareMsg = encodeURIComponent(
    `Read this article on MDRA Wealth: ${post.title} — ${postUrl}`
  );

  return (
    <>
      {/* Hero */}
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-gold hover:underline text-sm mb-6"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to Blog
          </Link>
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <User size={14} aria-hidden="true" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} aria-hidden="true" />
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} aria-hidden="true" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm font-semibold text-brand-navy mb-4">Share this article:</p>
            <ShareButtons
              waLink={`https://wa.me/?text=${waShareMsg}`}
              postUrl={postUrl}
            />
          </div>

          {/* WA CTA */}
          <div className="mt-10 bg-brand-light rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-heading font-bold text-brand-navy">Have questions about this topic?</p>
              <p className="text-sm text-gray-500 mt-1">
                Chat with Kushal Pal for a free personalised consultation.
              </p>
            </div>
            <WhatsAppButton
              label="Chat with an Advisor"
              href={`https://wa.me/917574812332?text=Hi%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(post.title)}%20and%20have%20a%20question.`}
            />
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-brand-light py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-brand-navy mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
