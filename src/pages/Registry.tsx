import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Map, Grid3X3, Filter } from 'lucide-react';
import { Container } from '../components/layout';
import { LocationGrid, FilterSidebar } from '../components/locations';
import { Button } from '../components/ui';
import { mockLocations } from '../data/mock';
import { cn } from '../utils';

export function Registry() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get filters from URL params
  const filters = {
    search: searchParams.get('search') || '',
    country: searchParams.get('country') || '',
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    period: searchParams.get('period') || '',
  };

  // Update URL params when filter changes
  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filter locations based on current filters
  // TODO [STRAPI]: Replace with API call that handles filtering server-side
  const filteredLocations = useMemo(() => {
    return mockLocations.filter((loc) => {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matches =
          loc.title.toLowerCase().includes(searchLower) ||
          loc.architect.toLowerCase().includes(searchLower) ||
          loc.city.toLowerCase().includes(searchLower) ||
          loc.country.toLowerCase().includes(searchLower);
        if (!matches) return false;
      }
      if (filters.country && loc.country !== filters.country) return false;
      if (filters.city && loc.city !== filters.city) return false;
      if (filters.type && !loc.type.includes(filters.type)) return false;
      if (filters.period && loc.period !== filters.period) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-light-gray border-b border-border-gray">
        <Container>
          <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-brand-black">
              Registro Art Déco
            </h1>
            <p className="mt-2 text-brand-gray">
              Explora nuestra colección de arquitectura y arte Art Déco de todo el mundo.
            </p>

            {/* View Toggle */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex border border-border-gray">
                <button
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide',
                    'bg-brand-black text-white'
                  )}
                >
                  <Grid3X3 className="w-4 h-4" />
                  Cuadrícula
                </button>
                <Link
                  to={`/mapa?${searchParams.toString()}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-light-gray transition-colors"
                >
                  <Map className="w-4 h-4" />
                  Mapa
                </Link>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border-gray text-sm font-bold uppercase tracking-wide text-brand-black"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-8 md:py-12 flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              resultCount={filteredLocations.length}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <LocationGrid
              locations={filteredLocations}
              emptyMessage="No se han encontrado edificios con los filtros seleccionados."
            />
          </div>
        </div>
      </Container>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white overflow-y-auto">
            <div className="p-4 border-b border-border-gray flex items-center justify-between">
              <h2 className="text-lg font-bold uppercase tracking-wide">Filtros</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 text-brand-black"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                resultCount={filteredLocations.length}
              />
            </div>
            <div className="p-4 border-t border-border-gray">
              <Button
                variant="primary"
                fullWidth
                onClick={() => setShowMobileFilters(false)}
              >
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
