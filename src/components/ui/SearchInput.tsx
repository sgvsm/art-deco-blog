import { InputHTMLAttributes, forwardRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../utils';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  variant?: 'default' | 'hero';
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, variant = 'default', className, value, ...props }, ref) => {
    const isHero = variant === 'hero';

    return (
      <div className={cn('relative', isHero && 'w-full max-w-2xl')}>
        <Search
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 text-meta-gray',
            isHero ? 'w-6 h-6' : 'w-5 h-5'
          )}
        />
        <input
          ref={ref}
          type="text"
          value={value}
          className={cn(
            'w-full border bg-white text-brand-black placeholder-meta-gray',
            'focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent',
            'transition-all duration-200',
            isHero
              ? 'pl-14 pr-12 py-5 text-lg border-0 shadow-lg'
              : 'pl-12 pr-10 py-3 border-border-gray',
            className
          )}
          {...props}
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2 text-meta-gray hover:text-brand-black',
              'transition-colors'
            )}
            aria-label="Esborrar cerca"
          >
            <X className={isHero ? 'w-6 h-6' : 'w-5 h-5'} />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
