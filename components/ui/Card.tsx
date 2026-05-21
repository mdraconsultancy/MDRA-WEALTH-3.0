import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'dark';
}

export default function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        {
          'bg-white border border-gray-100 shadow-md': variant === 'default',
          'bg-white/10 backdrop-blur-md border border-brand-gold/30 shadow-xl': variant === 'glass',
          'bg-brand-navy border border-brand-gold/20 shadow-xl': variant === 'dark',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
