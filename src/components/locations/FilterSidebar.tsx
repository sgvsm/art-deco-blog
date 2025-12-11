import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { SearchInput, Button } from '../ui';
import { cn } from '../../utils';

interface FilterSidebarProps {
  filters: {
    search: string;
    country: string;
    city: string;
    type: string;
    period: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
  resultCount: number;
}

// TODO [STRAPI]: These should come from API
const countries = ['España', 'Portugal', 'Estados Unidos', 'Francia', 'Argentina', 'Reino Unido', 'Australia'];
const types = ['Residencial', 'Comercial', 'Cultural', 'Industrial', 'Monumental', 'Pública'];
const periods = ['1920-1930', '1930-1940', '1940-1950', 'Pre-1920', 'Post-1950'];

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border-gray pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-sm font-bold uppercase tracking-wide text-brand-black"
      >
        {title}
        <ChevronDown
          className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

export function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
  resultCount,
}: FilterSidebarProps) {
  const hasActiveFilters =
    filters.search || filters.country || filters.city || filters.type || filters.period;

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-24 space-y-4">
        {/* Results Count */}
        <div className="pb-4 border-b border-border-gray">
          <p className="text-sm text-meta-gray">
            <span className="text-2xl font-bold text-brand-black">{resultCount}</span>{' '}
            resultados
          </p>
        </div>

        {/* Search */}
        <div className="pb-4 border-b border-border-gray">
          <SearchInput
            placeholder="Buscar..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            onClear={() => onFilterChange('search', '')}
          />
        </div>

        {/* Country Filter */}
        <FilterSection title="País">
          <div className="space-y-2">
            {countries.map((country) => (
              <label
                key={country}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="country"
                  checked={filters.country === country}
                  onChange={() =>
                    onFilterChange('country', filters.country === country ? '' : country)
                  }
                  className="w-4 h-4 text-brand-red focus:ring-brand-red border-border-gray"
                />
                <span className="text-sm text-brand-gray group-hover:text-brand-black">
                  {country}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Type Filter */}
        <FilterSection title="Tipología">
          <div className="space-y-2">
            {types.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="type"
                  checked={filters.type === type}
                  onChange={() =>
                    onFilterChange('type', filters.type === type ? '' : type)
                  }
                  className="w-4 h-4 text-brand-red focus:ring-brand-red border-border-gray"
                />
                <span className="text-sm text-brand-gray group-hover:text-brand-black">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Period Filter */}
        <FilterSection title="Período">
          <div className="space-y-2">
            {periods.map((period) => (
              <label
                key={period}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="period"
                  checked={filters.period === period}
                  onChange={() =>
                    onFilterChange('period', filters.period === period ? '' : period)
                  }
                  className="w-4 h-4 text-brand-red focus:ring-brand-red border-border-gray"
                />
                <span className="text-sm text-brand-gray group-hover:text-brand-black">
                  {period}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            icon={<X className="w-4 h-4" />}
            className="w-full justify-center"
          >
            Borrar filtros
          </Button>
        )}
      </div>
    </aside>
  );
}
