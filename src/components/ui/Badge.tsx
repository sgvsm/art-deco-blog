import { ReactNode } from 'react';
import { cn } from '../../utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-light-gray text-brand-gray',
    dark: 'bg-brand-black text-white',
    outline: 'bg-transparent border border-border-gray text-brand-gray',
  };

  return (
    <span
      className={cn(
        'inline-block px-2 py-1 text-xs font-medium uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
