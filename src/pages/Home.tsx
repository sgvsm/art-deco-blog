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
import {
  DecoSectionDivider,
  DecoFountainIcon,
  DecoRadiantFountainIcon,
  DecoPalmFrondIcon,
  DecoSpiralScrollIcon,
} from '../components/ui/ArtDecoPatterns';
import artDecoPattern from '../assets/artdecoparttern1.png';

export function Home() {
  return (
    <>
      {/* Search bar + scrolling image gallery + stats */}
      <Hero />

      {/* Featured exhibitions with banner + 3 cards */}
      <ExhibitionsSection />

      {/* Art Deco stepped pyramid divider */}
      <DecoSectionDivider className="py-10" icon="pyramid" />

      {/* City cloud - explore by city, alphabetical with font size by count */}
      <CityCloud />

      {/* Membership call to action with Art Deco background */}
      <MembershipCTA backgroundImage={artDecoPattern} />

      {/* News grid - 4 items in 2x2 */}
      <NewsSection />

      {/* Encyclopedia + Newsletter subscription */}
      <EncyclopediaNewsletter />

      {/* NEW: Radiant Fountain + Palm Fronds + Spirals row */}
      <div className="py-10 flex items-end justify-center gap-12 bg-brand-black">
        <DecoPalmFrondIcon size="lg" color="#C9A227" />
        <DecoRadiantFountainIcon size="lg" color="#C9A227" />
        <DecoPalmFrondIcon size="lg" color="#C9A227" />
      </div>

      {/* Social links + featured articles */}
      <SocialSection />

      {/* Partner logos */}
      <PartnersSection />
    </>
  );
}
