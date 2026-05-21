import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://wa.me/917574812332?text=Hi%2C%20I%20want%20consultation%20regarding%20financial%20planning.';

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({
  label = 'Free Consultation',
  className,
  href = WA_LINK,
  size = 'md',
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${label}`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full font-semibold bg-brand-gold text-white hover:brightness-110 transition-all duration-200 shadow-lg',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
    >
      <MessageCircle className="shrink-0" size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} aria-hidden="true" />
      {label}
    </a>
  );
}
