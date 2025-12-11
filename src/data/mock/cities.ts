import { CityCloudItem, CountryCloudItem } from '../../types';

// TODO [STRAPI]: Replace with API call or computed from locations data
export const mockCityCloud: CityCloudItem[] = [
  { city: 'Barcelona', count: 156, region: 'Catalunya', country: 'España' },
  { city: 'Madrid', count: 134, region: 'Comunidad de Madrid', country: 'España' },
  { city: 'Lisboa', count: 89, region: 'Lisboa', country: 'Portugal' },
  { city: 'New York', count: 78, region: 'New York', country: 'USA' },
  { city: 'Paris', count: 67, region: 'Île-de-France', country: 'France' },
  { city: 'Valencia', count: 54, region: 'Comunitat Valenciana', country: 'España' },
  { city: 'Buenos Aires', count: 52, region: 'Buenos Aires', country: 'Argentina' },
  { city: 'Miami Beach', count: 48, region: 'Florida', country: 'USA' },
  { city: 'Sevilla', count: 45, region: 'Andalucía', country: 'España' },
  { city: 'Porto', count: 42, region: 'Porto', country: 'Portugal' },
  { city: 'London', count: 38, region: 'Greater London', country: 'United Kingdom' },
  { city: 'Sydney', count: 35, region: 'New South Wales', country: 'Australia' },
  { city: 'Bilbao', count: 32, region: 'País Vasco', country: 'España' },
  { city: 'Rio de Janeiro', count: 28, region: 'Rio de Janeiro', country: 'Brasil' },
  { city: 'San Sebastián', count: 25, region: 'País Vasco', country: 'España' },
  { city: 'Málaga', count: 23, region: 'Andalucía', country: 'España' },
  { city: 'Los Angeles', count: 21, region: 'California', country: 'USA' },
  { city: 'Chicago', count: 19, region: 'Illinois', country: 'USA' },
  { city: 'São Paulo', count: 18, region: 'São Paulo', country: 'Brasil' },
  { city: 'Melbourne', count: 16, region: 'Victoria', country: 'Australia' },
  { city: 'Girona', count: 14, region: 'Catalunya', country: 'España' },
  { city: 'Tarragona', count: 12, region: 'Catalunya', country: 'España' },
  { city: 'Nice', count: 11, region: 'Provence-Alpes-Côte d\'Azur', country: 'France' },
  { city: 'Coimbra', count: 9, region: 'Centro', country: 'Portugal' },
];

// Get min and max counts for font size calculation
export const getCityCloudStats = () => {
  const counts = mockCityCloud.map((c) => c.count);
  return {
    min: Math.min(...counts),
    max: Math.max(...counts),
  };
};

// Calculate font size based on count (14px min, 48px max)
export const getCityFontSize = (count: number): number => {
  const { min, max } = getCityCloudStats();
  const minSize = 14;
  const maxSize = 48;

  if (max === min) return (minSize + maxSize) / 2;

  const ratio = (count - min) / (max - min);
  return minSize + ratio * (maxSize - minSize);
};

// Country cloud data - aggregated from cities
// TODO [STRAPI]: Replace with API call or computed from locations data
export const mockCountryCloud: CountryCloudItem[] = [
  { country: 'España', count: 495 },
  { country: 'Portugal', count: 140 },
  { country: 'USA', count: 166 },
  { country: 'France', count: 78 },
  { country: 'Argentina', count: 52 },
  { country: 'United Kingdom', count: 38 },
  { country: 'Australia', count: 51 },
  { country: 'Brasil', count: 46 },
  { country: 'México', count: 67 },
  { country: 'Italia', count: 45 },
  { country: 'Alemania', count: 32 },
  { country: 'Bélgica', count: 28 },
  { country: 'Países Bajos', count: 22 },
  { country: 'Cuba', count: 35 },
  { country: 'Uruguay', count: 18 },
  { country: 'Chile', count: 15 },
  { country: 'India', count: 42 },
  { country: 'Japón', count: 29 },
  { country: 'Sudáfrica', count: 19 },
  { country: 'Marruecos', count: 14 },
];

// Get min and max counts for country font size calculation
export const getCountryCloudStats = () => {
  const counts = mockCountryCloud.map((c) => c.count);
  return {
    min: Math.min(...counts),
    max: Math.max(...counts),
  };
};

// Calculate font size for countries (14px min, 48px max)
export const getCountryFontSize = (count: number): number => {
  const { min, max } = getCountryCloudStats();
  const minSize = 14;
  const maxSize = 48;

  if (max === min) return (minSize + maxSize) / 2;

  const ratio = (count - min) / (max - min);
  return minSize + ratio * (maxSize - minSize);
};
