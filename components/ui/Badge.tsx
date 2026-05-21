import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'navy' | 'light';
}

export default function Badge({ children, className, variant = 'gold' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        {
          'bg-brand-gold/10 text-brand-gold border border-brand-gold/30': variant === 'gold',
          'bg-brand-navy text-white': variant === 'navy',
          'bg-brand-light text-brand-navy': variant === 'light',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
