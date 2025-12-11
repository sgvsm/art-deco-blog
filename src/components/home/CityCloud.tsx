import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from '../layout';
import { mockCityCloud, getCityFontSize, mockCountryCloud, getCountryFontSize } from '../../data/mock';

type CloudTab = 'city' | 'country';

export function CityCloud() {
  const [activeTab, setActiveTab] = useState<CloudTab>('city');
  const [isExpanded, setIsExpanded] = useState(false);

  // TODO [STRAPI]: Replace with computed data from locations API
  // Sort cities alphabetically
  const cities = [...mockCityCloud].sort((a, b) => a.city.localeCompare(b.city));
  const countries = [...mockCountryCloud].sort((a, b) => a.country.localeCompare(b.country));

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Header with Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('city')}
              className={`text-sm md:text-base font-medium uppercase tracking-wider transition-colors ${
                activeTab === 'city'
                  ? 'text-brand-black'
                  : 'text-meta-gray hover:text-brand-black'
              }`}
            >
              Explorar por ciudad
            </button>
            <button
              onClick={() => {
                setActiveTab('country');
                setIsExpanded(true);
              }}
              className={`text-sm md:text-base font-medium uppercase tracking-wider transition-colors ${
                activeTab === 'country'
                  ? 'text-brand-black'
                  : 'text-meta-gray hover:text-brand-black'
              }`}
            >
              Explorar por país
            </button>
          </div>

          {/* Collapse/Expand Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-meta-gray hover:text-brand-black transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Mostrar menos</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Mostrar más</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* City Cloud - alphabetical, font size based on count */}
        {activeTab === 'city' && (
          <div
            className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-[60px]'
            }`}
          >
            {cities.map((city) => (
              <Link
                key={city.city}
                to={`/registro?city=${encodeURIComponent(city.city)}`}
                className="text-brand-black hover:text-brand-primary transition-colors whitespace-nowrap"
                style={{ fontSize: `${getCityFontSize(city.count)}px` }}
              >
                {city.city}
              </Link>
            ))}
          </div>
        )}

        {/* Country Cloud - alphabetical, font size based on count */}
        {activeTab === 'country' && (
          <div
            className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-[60px]'
            }`}
          >
            {countries.map((country) => (
              <Link
                key={country.country}
                to={`/registro?country=${encodeURIComponent(country.country)}`}
                className="text-brand-black hover:text-brand-primary transition-colors whitespace-nowrap"
                style={{ fontSize: `${getCountryFontSize(country.count)}px` }}
              >
                {country.country}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
