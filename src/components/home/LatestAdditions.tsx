import { Container } from '../layout';
import { SectionTitle } from '../shared';
import { LocationGrid } from '../locations';
import { getLatestLocations } from '../../data/mock';

export function LatestAdditions() {
  // TODO [STRAPI]: Replace with API call using useFetchLocations hook
  const locations = getLatestLocations(8);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle viewAllLink="/registro" viewAllText="Ver todo el registro">
          Últimas Incorporaciones
        </SectionTitle>
        <LocationGrid locations={locations} />
      </Container>
    </section>
  );
}
