import {
  Hero,
  ExhibitionsSection,
  CityCloud,
  MembershipCTA,
  NewsSection,
  EncyclopediaNewsletter,
  SocialSection,
  PartnersSection,
} from '../components/home';
import { DecoSectionDivider } from '../components/ui/ArtDecoPatterns';
import artDecoPattern from '../assets/artdecoparttern1.png';

export function Home() {
  return (
    <>
      {/* Search bar + scrolling image gallery + stats */}
      <Hero />

      {/* City cloud - explore by city/country, alphabetical with font size by count */}
      <CityCloud />

      {/* Featured exhibitions with banner + 3 cards */}
      <ExhibitionsSection />

      {/* Art Deco stepped pyramid divider */}
      <DecoSectionDivider className="py-10" icon="pyramid" />

      {/* Membership call to action with Art Deco background */}
      <MembershipCTA backgroundImage={artDecoPattern} />

      {/* News grid - 4 items in 2x2 */}
      <NewsSection />

      {/* Encyclopedia + Newsletter subscription */}
      <EncyclopediaNewsletter />

      {/* Social links + featured articles */}
      <SocialSection />

      {/* Partner logos */}
      <PartnersSection />
    </>
  );
}
