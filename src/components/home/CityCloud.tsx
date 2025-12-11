import { Link } from 'react-router-dom';
import { Container } from '../layout';
import { mockCityCloud, getCityFontSize } from '../../data/mock';

export function CityCloud() {
  // TODO [STRAPI]: Replace with computed data from locations API
  // Sort cities alphabetically
  const cities = [...mockCityCloud].sort((a, b) => a.city.localeCompare(b.city));

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Label */}
        <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-6">
          Explorar por ciudad
        </p>

        {/* City Cloud - alphabetical, font size based on count */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
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
      </Container>
    </section>
  );
}
