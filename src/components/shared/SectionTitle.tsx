import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils';

interface SectionTitleProps {
  children: ReactNode;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
  variant?: 'default' | 'light';
}

export function SectionTitle({
  children,
  viewAllLink,
  viewAllText = 'Ver todo',
  className,
  variant = 'default',
}: SectionTitleProps) {
  const isLight = variant === 'light';

  return (
    <div className={cn('flex items-center justify-between mb-8', className)}>
      <h2
        className={cn(
          'text-2xl md:text-3xl uppercase tracking-wider font-bold',
          isLight ? 'text-white' : 'text-brand-black'
        )}
      >
        {children}
      </h2>
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className={cn(
            'hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors',
            isLight
              ? 'text-white/70 hover:text-white'
              : 'text-meta-gray hover:text-brand-black'
          )}
        >
          {viewAllText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
