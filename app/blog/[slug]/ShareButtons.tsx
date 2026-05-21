'use client';

import { useState } from 'react';
import { MessageCircle, Copy, Check } from 'lucide-react';

interface ShareButtonsProps {
  waLink: string;
  postUrl: string;
}

export default function ShareButtons({ waLink, postUrl }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={16} aria-hidden="true" /> Share on WhatsApp
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy article link"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} aria-hidden="true" className="text-green-500" /> Copied!
          </>
        ) : (
          <>
            <Copy size={16} aria-hidden="true" /> Copy Link
          </>
        )}
      </button>
    </div>
  );
}
