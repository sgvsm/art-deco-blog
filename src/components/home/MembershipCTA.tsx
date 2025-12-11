import { Link } from 'react-router-dom';
import { Container } from '../layout';

interface MembershipCTAProps {
  backgroundImage?: string;
}

export function MembershipCTA({ backgroundImage }: MembershipCTAProps) {
  return (
    <section className="relative bg-[#1a2836] overflow-hidden">
      {/* Background with Art Deco pattern */}
      {backgroundImage && (
        <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
          <img
            src={backgroundImage}
            alt=""
            className="w-full max-w-[980px] h-auto translate-y-[2%]"
          />
        </div>
      )}

      {/* Content with white CTA banner */}
      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        <Container>
          <div className="bg-white py-8 md:py-10 px-6 md:px-12 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black">
             Encuentra Fotos y Libros en la Tienda
            </h2>
            <Link
              to="/about"
              className="inline-block mt-4 px-8 py-3 bg-brand-black text-white font-medium uppercase tracking-wide text-sm hover:bg-brand-primary transition-colors"
            >
              Empieza ahora
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
