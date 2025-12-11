// Art Deco SVG Icons & Motifs - Geometric icons inspired by Art Deco style
// Features: stepped fountain shapes, chevron patterns, fan designs, bold symmetry

type IconProps = {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

// Stepped Fountain Icon - Like the middle design in the reference image
export function DecoFountainIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeMap[size]} ${className}`}
      fill={color}
    >
      {/* Base semicircle */}
      <path d="M20,100 A30,30 0 0,1 80,100 L80,100 L20,100 Z" />
      {/* Center pillar with steps */}
      <rect x="40" y="50" width="20" height="50" />
      <rect x="35" y="60" width="30" height="8" />
      {/* Top stepped crown */}
      <rect x="30" y="30" width="40" height="25" />
      <rect x="35" y="20" width="30" height="15" />
      <rect x="40" y="10" width="20" height="15" />
      <rect x="45" y="0" width="10" height="15" />
    </svg>
  );
}

// Chevron Tower Icon - Like the left design with chevrons
export function DecoChevronTowerIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 120"
      className={`${sizeMap[size]} ${className}`}
      fill="none"
      stroke={color}
      strokeWidth="3"
    >
      {/* Outer frame */}
      <path d="M10,120 L10,30 L40,5 L70,30 L70,120" fill="none" />
      {/* Inner chevrons */}
      <polyline points="25,95 40,80 55,95" />
      <polyline points="25,75 40,60 55,75" />
      <polyline points="25,55 40,40 55,55" />
      {/* Bottom decorative circles */}
      <circle cx="20" cy="110" r="4" fill={color} />
      <circle cx="30" cy="110" r="4" fill={color} />
      <circle cx="40" cy="110" r="4" fill={color} />
    </svg>
  );
}

// Geometric Fan Icon - Like the right design with chevrons and rectangles
export function DecoGeometricFanIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={`${sizeMap[size]} ${className}`}
      fill={color}
    >
      {/* Outer angled frame */}
      <path d="M15,120 L5,40 L50,5 L95,40 L85,120 Z" fill="none" stroke={color} strokeWidth="3" />
      {/* Center chevron column */}
      <polyline points="50,25 35,40 50,40" fill="none" stroke={color} strokeWidth="2" />
      <polyline points="50,25 65,40 50,40" fill="none" stroke={color} strokeWidth="2" />
      <polyline points="50,45 35,60 50,60" fill="none" stroke={color} strokeWidth="2" />
      <polyline points="50,45 65,60 50,60" fill="none" stroke={color} strokeWidth="2" />
      <polyline points="50,65 35,80 50,80" fill="none" stroke={color} strokeWidth="2" />
      <polyline points="50,65 65,80 50,80" fill="none" stroke={color} strokeWidth="2" />
      {/* Side rectangles */}
      <rect x="18" y="50" width="8" height="15" />
      <rect x="18" y="70" width="8" height="15" />
      <rect x="18" y="90" width="8" height="15" />
      <rect x="74" y="50" width="8" height="15" />
      <rect x="74" y="70" width="8" height="15" />
      <rect x="74" y="90" width="8" height="15" />
    </svg>
  );
}

// Sunburst/Sunrise Icon
export function DecoSunburstIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={`${sizeMap[size]} ${className}`}
      fill={color}
    >
      {/* Rays */}
      <rect x="48" y="0" width="4" height="25" />
      <rect x="48" y="0" width="4" height="20" transform="rotate(-30, 50, 60)" />
      <rect x="48" y="0" width="4" height="20" transform="rotate(30, 50, 60)" />
      <rect x="48" y="0" width="4" height="15" transform="rotate(-60, 50, 60)" />
      <rect x="48" y="0" width="4" height="15" transform="rotate(60, 50, 60)" />
      <rect x="48" y="0" width="4" height="12" transform="rotate(-75, 50, 60)" />
      <rect x="48" y="0" width="4" height="12" transform="rotate(75, 50, 60)" />
      {/* Base semicircle */}
      <path d="M10,60 A40,40 0 0,1 90,60 Z" />
    </svg>
  );
}

// Stepped Pyramid Icon
export function DecoSteppedPyramidIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={`${sizeMap[size]} ${className}`}
      fill={color}
    >
      <rect x="0" y="70" width="100" height="10" />
      <rect x="10" y="55" width="80" height="15" />
      <rect x="20" y="40" width="60" height="15" />
      <rect x="30" y="25" width="40" height="15" />
      <rect x="40" y="10" width="20" height="15" />
      <rect x="45" y="0" width="10" height="10" />
    </svg>
  );
}

// Art Deco Diamond Icon
export function DecoDiamondIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 100"
      className={`${sizeMap[size]} ${className}`}
      fill="none"
      stroke={color}
      strokeWidth="3"
    >
      <polygon points="30,5 55,50 30,95 5,50" />
      <polygon points="30,20 45,50 30,80 15,50" fill={color} opacity="0.3" />
      <line x1="30" y1="5" x2="30" y2="95" />
      <line x1="5" y1="50" x2="55" y2="50" />
    </svg>
  );
}

// Keystone/Arch Icon
export function DecoKeystoneIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 100"
      className={`${sizeMap[size]} ${className}`}
      fill={color}
    >
      {/* Outer keystone shape */}
      <path d="M10,100 L5,40 Q40,0 75,40 L70,100 Z" />
      {/* Inner cutout */}
      <path d="M20,100 L17,50 Q40,20 63,50 L60,100 Z" fill="white" />
      {/* Center vertical element */}
      <rect x="35" y="35" width="10" height="65" fill={color} />
    </svg>
  );
}

// Decorative Section Divider with centered icon
export function DecoSectionDivider({
  className = '',
  icon = 'fountain',
  showLines = true
}: {
  className?: string;
  icon?: 'fountain' | 'sunburst' | 'pyramid' | 'diamond';
  showLines?: boolean;
}) {
  const IconComponent = {
    fountain: DecoFountainIcon,
    sunburst: DecoSunburstIcon,
    pyramid: DecoSteppedPyramidIcon,
    diamond: DecoDiamondIcon,
  }[icon];

  return (
    <div className={`w-full flex items-center justify-center gap-4 ${className}`}>
      {showLines && (
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-deco-gold max-w-[200px]" />
      )}
      <IconComponent size="md" />
      {showLines && (
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-deco-gold max-w-[200px]" />
      )}
    </div>
  );
}

// Corner ornament for cards/headers - more intricate design
export function DecoCornerOrnament({
  className = '',
  position = 'top-left',
  color = '#C9A227'
}: {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
}) {
  const transforms = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-right': 'scale(-1, -1)',
    'bottom-left': 'scale(1, -1)',
  };

  return (
    <svg
      viewBox="0 0 60 60"
      className={`w-10 h-10 md:w-14 md:h-14 ${className}`}
      style={{ transform: transforms[position] }}
      fill={color}
    >
      {/* Stepped corner */}
      <rect x="0" y="0" width="60" height="8" />
      <rect x="0" y="0" width="8" height="60" />
      <rect x="0" y="12" width="45" height="6" />
      <rect x="12" y="0" width="6" height="45" />
      <rect x="0" y="22" width="30" height="4" />
      <rect x="22" y="0" width="4" height="30" />
    </svg>
  );
}

// Left Side Facade - Arch/Building facade pattern for left side of header/footer
export function DecoLeftFacade({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 40 60"
      className={`h-full w-auto ${className}`}
      fill={color}
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Outer arch frame */}
      <path d="M40,0 L40,60 L35,60 L35,10 Q20,0 5,10 L5,60 L0,60 L0,0 Z" fillOpacity="0.3" />
      {/* Inner stepped elements */}
      <rect x="8" y="15" width="4" height="45" />
      <rect x="14" y="20" width="4" height="40" />
      <rect x="20" y="25" width="4" height="35" />
      {/* Top arch detail */}
      <path d="M5,12 Q20,2 35,12" fill="none" stroke={color} strokeWidth="2" />
      <path d="M10,16 Q20,8 30,16" fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Right Side Facade - Mirrored version for right side
export function DecoRightFacade({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 40 60"
      className={`h-full w-auto ${className}`}
      fill={color}
      preserveAspectRatio="xMaxYMid meet"
      style={{ transform: 'scaleX(-1)' }}
    >
      {/* Outer arch frame */}
      <path d="M40,0 L40,60 L35,60 L35,10 Q20,0 5,10 L5,60 L0,60 L0,0 Z" fillOpacity="0.3" />
      {/* Inner stepped elements */}
      <rect x="8" y="15" width="4" height="45" />
      <rect x="14" y="20" width="4" height="40" />
      <rect x="20" y="25" width="4" height="35" />
      {/* Top arch detail */}
      <path d="M5,12 Q20,2 35,12" fill="none" stroke={color} strokeWidth="2" />
      <path d="M10,16 Q20,8 30,16" fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Stepped Side Facade - More geometric stepped pattern with rounded corners
// Tallest bar at 75% height, all bars extend to bottom, rounded only on top
export function DecoSteppedFacadeLeft({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 50 80"
      className={`h-full w-auto ${className}`}
      fill={color}
      preserveAspectRatio="xMinYMax meet"
    >
      {/* Stepped building facade - tallest starts at 20 (75% height), all extend to bottom */}
      <path d="M45,20 L45,80 L50,80 L50,20 Q47.5,18 45,20" />
      <path d="M35,30 L35,80 L50,80 L50,30 Q42.5,27 35,30" fillOpacity="0.7" />
      <path d="M25,40 L25,80 L40,80 L40,40 Q32.5,37 25,40" fillOpacity="0.5" />
      <path d="M15,50 L15,80 L30,80 L30,50 Q22.5,47 15,50" fillOpacity="0.3" />
      <path d="M5,58 L5,80 L20,80 L20,58 Q12.5,55 5,58" fillOpacity="0.2" />
      {/* Vertical line accents */}
      <rect x="46" y="24" width="1" height="56" fill="white" fillOpacity="0.3" />
      <rect x="36" y="34" width="1" height="46" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

export function DecoSteppedFacadeRight({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 50 80"
      className={`h-full w-auto ${className}`}
      fill={color}
      preserveAspectRatio="xMaxYMax meet"
      style={{ transform: 'scaleX(-1)' }}
    >
      {/* Stepped building facade - tallest starts at 20 (75% height), all extend to bottom */}
      <path d="M45,20 L45,80 L50,80 L50,20 Q47.5,18 45,20" />
      <path d="M35,30 L35,80 L50,80 L50,30 Q42.5,27 35,30" fillOpacity="0.7" />
      <path d="M25,40 L25,80 L40,80 L40,40 Q32.5,37 25,40" fillOpacity="0.5" />
      <path d="M15,50 L15,80 L30,80 L30,50 Q22.5,47 15,50" fillOpacity="0.3" />
      <path d="M5,58 L5,80 L20,80 L20,58 Q12.5,55 5,58" fillOpacity="0.2" />
      {/* Vertical line accents */}
      <rect x="46" y="24" width="1" height="56" fill="white" fillOpacity="0.3" />
      <rect x="36" y="34" width="1" height="46" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

// Art Deco Sunlight/Sunburst decoration with hard lines and diagonal patterns
export function DecoSunlightBar({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 800 60"
      className={`w-full h-12 ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Center sunburst rays */}
      <g stroke={color} strokeWidth="2">
        {/* Central vertical ray */}
        <line x1="400" y1="60" x2="400" y2="5" />
        {/* Rays spreading outward */}
        <line x1="400" y1="60" x2="370" y2="8" />
        <line x1="400" y1="60" x2="430" y2="8" />
        <line x1="400" y1="60" x2="340" y2="12" />
        <line x1="400" y1="60" x2="460" y2="12" />
        <line x1="400" y1="60" x2="310" y2="18" />
        <line x1="400" y1="60" x2="490" y2="18" />
        <line x1="400" y1="60" x2="280" y2="25" />
        <line x1="400" y1="60" x2="520" y2="25" />
      </g>

      {/* Left horizontal connecting lines */}
      <g stroke={color} strokeWidth="1.5">
        <line x1="100" y1="30" x2="250" y2="30" />
        <line x1="120" y1="35" x2="240" y2="35" strokeDasharray="4,3" />
      </g>

      {/* Right horizontal connecting lines */}
      <g stroke={color} strokeWidth="1.5">
        <line x1="550" y1="30" x2="700" y2="30" />
        <line x1="560" y1="35" x2="680" y2="35" strokeDasharray="4,3" />
      </g>

      {/* Small accent diamonds */}
      <g fill={color}>
        <polygon points="260,30 268,25 276,30 268,35" />
        <polygon points="524,30 532,25 540,30 532,35" />
      </g>
    </svg>
  );
}

// Art Deco Badge V2 - Diamond with chevron frames and horizontal lines
export function DecoBadgeV2Icon({ className = '', color = '#987d45', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 500 400"
      className={`${size === 'sm' ? 'w-32 h-24' : size === 'md' ? 'w-48 h-36' : size === 'lg' ? 'w-64 h-48' : 'w-80 h-60'} ${className}`}
      fill="none"
    >
      {/* Left horizontal lines */}
      <line x1="80" y1="230" x2="190" y2="230" stroke={color} strokeWidth="2.5" />
      <line x1="80" y1="236" x2="180" y2="236" stroke={color} strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Right horizontal lines */}
      <line x1="310" y1="230" x2="420" y2="230" stroke={color} strokeWidth="2.5" />
      <line x1="320" y1="236" x2="420" y2="236" stroke={color} strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Bottom chevrons */}
      <polyline points="150,230 180,260 250,330 320,260 350,230" stroke={color} strokeWidth="8" strokeLinecap="butt" strokeLinejoin="miter" />
      <polyline points="180,230 200,250 250,300 300,250 320,230" stroke={color} strokeWidth="8" strokeLinecap="butt" strokeLinejoin="miter" />

      {/* Top chevrons */}
      <polyline points="150,150 180,120 250,50 320,120 350,150" stroke={color} strokeWidth="8" strokeLinecap="butt" strokeLinejoin="miter" />
      <polyline points="180,150 200,130 250,80 300,130 320,150" stroke={color} strokeWidth="8" strokeLinecap="butt" strokeLinejoin="miter" />

      {/* Center diamond - white fill */}
      <rect x="175" y="125" width="150" height="150" transform="rotate(45 250 200)" fill="white" />

      {/* Inner diamond - dotted border */}
      <rect x="185" y="135" width="130" height="130" transform="rotate(45 250 200)" stroke={color} strokeWidth="2.5" strokeDasharray="4,4" fill="none" />
    </svg>
  );
}

// Art Deco Badge/Emblem - Diamond shape with chevron wings (like the JOIN badge)
export function DecoBadgeIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={`${size === 'sm' ? 'w-24 h-14' : size === 'md' ? 'w-40 h-24' : size === 'lg' ? 'w-56 h-34' : 'w-72 h-44'} ${className}`}
      fill="none"
    >
      {/* Left chevron wings */}
      <g fill={color}>
        {/* Outer chevron left */}
        <polygon points="10,60 35,35 45,35 45,45 25,60 45,75 45,85 35,85" />
        {/* Inner chevron left */}
        <polygon points="30,60 50,42 58,42 58,50 42,60 58,70 58,78 50,78" />
      </g>

      {/* Right chevron wings (mirrored) */}
      <g fill={color}>
        {/* Outer chevron right */}
        <polygon points="190,60 165,35 155,35 155,45 175,60 155,75 155,85 165,85" />
        {/* Inner chevron right */}
        <polygon points="170,60 150,42 142,42 142,50 158,60 142,70 142,78 150,78" />
      </g>

      {/* Horizontal lines extending from center */}
      <g stroke={color} strokeWidth="2">
        {/* Left lines */}
        <line x1="60" y1="50" x2="75" y2="50" />
        <line x1="55" y1="60" x2="75" y2="60" />
        <line x1="60" y1="70" x2="75" y2="70" />
        {/* Right lines */}
        <line x1="125" y1="50" x2="140" y2="50" />
        <line x1="125" y1="60" x2="145" y2="60" />
        <line x1="125" y1="70" x2="140" y2="70" />
      </g>

      {/* Center diamond outline */}
      <g stroke={color} strokeWidth="3" fill="none">
        <polygon points="100,15 135,60 100,105 65,60" />
      </g>

      {/* Inner diamond (dashed) */}
      <g stroke={color} strokeWidth="1.5" strokeDasharray="3,2" fill="none">
        <polygon points="100,25 125,60 100,95 75,60" />
      </g>
    </svg>
  );
}

// Header/Footer decorative bar with Art Deco motifs (kept for backward compatibility)
export function DecorativeBar({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const bgColor = variant === 'dark' ? '#1A1A1A' : '#F5F5F3';
  const patternColor = '#C9A227';

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      <svg
        viewBox="0 0 1200 12"
        className="w-full h-3"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Center stepped motif */}
        <g fill={patternColor}>
          <rect x="580" y="0" width="40" height="12" />
          <rect x="570" y="3" width="60" height="6" />
          <rect x="560" y="5" width="80" height="2" />
        </g>
        {/* Left decorative elements */}
        <g fill={patternColor}>
          <rect x="100" y="5" width="20" height="2" />
          <polygon points="130,6 140,2 150,6 140,10" />
          <rect x="160" y="5" width="20" height="2" />

          <rect x="300" y="5" width="20" height="2" />
          <polygon points="330,6 340,2 350,6 340,10" />
          <rect x="360" y="5" width="20" height="2" />
        </g>
        {/* Right decorative elements (mirrored) */}
        <g fill={patternColor}>
          <rect x="1080" y="5" width="20" height="2" />
          <polygon points="1070,6 1060,2 1050,6 1060,10" />
          <rect x="1020" y="5" width="20" height="2" />

          <rect x="880" y="5" width="20" height="2" />
          <polygon points="870,6 860,2 850,6 860,10" />
          <rect x="820" y="5" width="20" height="2" />
        </g>
      </svg>
    </div>
  );
}

// Geometric border pattern
export function GeometricBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1200 16"
        className="w-full h-4"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="#C9A227">
          {/* Center diamond cluster */}
          <polygon points="600,8 608,0 616,8 608,16" />
          <polygon points="580,8 588,2 596,8 588,14" opacity="0.6" />
          <polygon points="620,8 612,2 604,8 612,14" opacity="0.6" />

          {/* Lines extending from center */}
          <rect x="0" y="7" width="560" height="2" opacity="0.3" />
          <rect x="640" y="7" width="560" height="2" opacity="0.3" />

          {/* Decorative diamonds along the line */}
          <polygon points="200,8 206,4 212,8 206,12" opacity="0.5" />
          <polygon points="400,8 406,4 412,8 406,12" opacity="0.5" />
          <polygon points="800,8 794,4 788,8 794,12" opacity="0.5" />
          <polygon points="1000,8 994,4 988,8 994,12" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

// Simple divider with center diamond (kept from original)
export function DiamondDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-deco-gold/50 to-deco-gold max-w-xs" />
      <DecoSteppedPyramidIcon size="sm" className="mx-6" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-deco-gold/50 to-deco-gold max-w-xs" />
    </div>
  );
}

// Sunburst divider with icon
export function SunburstDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-deco-gold/60 max-w-xs" />
      <DecoSunburstIcon size="lg" className="mx-4" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-deco-gold/60 max-w-xs" />
    </div>
  );
}

// Zigzag/Chevron divider with icons
export function ZigzagDivider({ className = '', variant = 'gold' }: { className?: string; variant?: 'gold' | 'dark' | 'light' }) {
  const color = variant === 'gold' ? '#C9A227' : variant === 'dark' ? '#1A1A1A' : '#E5E5E5';

  return (
    <div className={`w-full flex items-center justify-center gap-8 ${className}`}>
      <DecoChevronTowerIcon size="sm" color={color} />
      <DecoFountainIcon size="md" color={color} />
      <DecoGeometricFanIcon size="sm" color={color} />
    </div>
  );
}

// ============================================================================
// NEW PATTERNS - Inspired by elaborate Art Deco designs
// ============================================================================

// Layered Scallop/Arch Fan - Central motif with overlapping curved arches
export function DecoScallopFanIcon({ className = '', color = '#C9A227', bgColor = '#1a2836', size = 'md' }: IconProps & { bgColor?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className={`${size === 'sm' ? 'w-24 h-18' : size === 'md' ? 'w-40 h-30' : size === 'lg' ? 'w-56 h-42' : 'w-72 h-54'} ${className}`}
      fill="none"
    >
      {/* Background arch */}
      <path
        d="M10,150 Q10,40 100,10 Q190,40 190,150"
        fill={bgColor}
        stroke={color}
        strokeWidth="3"
      />
      {/* Outer scallop layers */}
      <path d="M30,150 Q30,70 100,35 Q170,70 170,150" fill="none" stroke={color} strokeWidth="2" />
      <path d="M45,150 Q45,85 100,50 Q155,85 155,150" fill="none" stroke={color} strokeWidth="2" />
      <path d="M60,150 Q60,95 100,65 Q140,95 140,150" fill="none" stroke={color} strokeWidth="2" />
      <path d="M75,150 Q75,105 100,80 Q125,105 125,150" fill="none" stroke={color} strokeWidth="2" />

      {/* Center radiating lines from bottom */}
      <g stroke={color} strokeWidth="1.5">
        <line x1="100" y1="150" x2="100" y2="25" />
        <line x1="100" y1="150" x2="80" y2="40" />
        <line x1="100" y1="150" x2="120" y2="40" />
        <line x1="100" y1="150" x2="60" y2="55" />
        <line x1="100" y1="150" x2="140" y2="55" />
        <line x1="100" y1="150" x2="45" y2="75" />
        <line x1="100" y1="150" x2="155" y2="75" />
      </g>

      {/* Inner decorative leaf/feather shapes */}
      <path d="M100,130 Q85,100 95,70" fill="none" stroke={color} strokeWidth="1" />
      <path d="M100,130 Q115,100 105,70" fill="none" stroke={color} strokeWidth="1" />

      {/* Small spiral accents */}
      <circle cx="55" cy="110" r="3" fill={color} />
      <circle cx="145" cy="110" r="3" fill={color} />
    </svg>
  );
}

// Radiating Fountain with stepped base - Like the bottom center element
export function DecoRadiantFountainIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 120"
      className={`${size === 'sm' ? 'w-20 h-14' : size === 'md' ? 'w-36 h-24' : size === 'lg' ? 'w-52 h-34' : 'w-68 h-44'} ${className}`}
      fill="none"
    >
      {/* Radiating lines from base center */}
      <g stroke={color} strokeWidth="2">
        <line x1="90" y1="120" x2="90" y2="10" />
        <line x1="90" y1="120" x2="70" y2="15" />
        <line x1="90" y1="120" x2="110" y2="15" />
        <line x1="90" y1="120" x2="50" y2="20" />
        <line x1="90" y1="120" x2="130" y2="20" />
        <line x1="90" y1="120" x2="35" y2="30" />
        <line x1="90" y1="120" x2="145" y2="30" />
        <line x1="90" y1="120" x2="20" y2="45" />
        <line x1="90" y1="120" x2="160" y2="45" />
        <line x1="90" y1="120" x2="10" y2="60" />
        <line x1="90" y1="120" x2="170" y2="60" />
      </g>

      {/* Stepped base hexagon */}
      <g fill={color}>
        <polygon points="90,120 75,105 75,95 90,85 105,95 105,105" />
        <polygon points="90,85 80,80 80,75 90,70 100,75 100,80" fillOpacity="0.7" />
      </g>

      {/* Horizontal accent lines */}
      <g stroke={color} strokeWidth="1">
        <line x1="30" y1="75" x2="60" y2="75" />
        <line x1="120" y1="75" x2="150" y2="75" />
      </g>
    </svg>
  );
}

// Art Deco Stepped Corner Frame - Geometric angular corner
export function DecoSteppedCornerFrame({ className = '', color = '#C9A227', bgColor = '#1a2836' }: { className?: string; color?: string; bgColor?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      fill="none"
    >
      {/* Outer stepped frame */}
      <path
        d="M0,0 L30,0 L30,10 L10,10 L10,30 L0,30 Z"
        fill={color}
      />
      {/* Inner accent lines */}
      <path d="M5,5 L25,5 L25,8 L8,8 L8,25 L5,25 Z" fill={bgColor} />
      <line x1="15" y1="0" x2="15" y2="15" stroke={color} strokeWidth="1" />
      <line x1="0" y1="15" x2="15" y2="15" stroke={color} strokeWidth="1" />
    </svg>
  );
}

// Palm Frond / Feather motif - Curved leaf shapes
export function DecoPalmFrondIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 150"
      className={`${size === 'sm' ? 'w-10 h-18' : size === 'md' ? 'w-16 h-30' : size === 'lg' ? 'w-24 h-44' : 'w-32 h-58'} ${className}`}
      fill="none"
    >
      {/* Central stem */}
      <line x1="40" y1="150" x2="40" y2="10" stroke={color} strokeWidth="3" />

      {/* Left fronds */}
      <path d="M40,20 Q15,30 10,60" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,40 Q20,50 15,75" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,60 Q25,70 20,90" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,80 Q30,90 25,105" stroke={color} strokeWidth="2" fill="none" />

      {/* Right fronds (mirrored) */}
      <path d="M40,20 Q65,30 70,60" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,40 Q60,50 65,75" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,60 Q55,70 60,90" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40,80 Q50,90 55,105" stroke={color} strokeWidth="2" fill="none" />

      {/* Top ornament */}
      <polygon points="40,5 35,15 40,12 45,15" fill={color} />
    </svg>
  );
}

// Decorative Spiral Scroll accent
export function DecoSpiralScrollIcon({ className = '', color = '#C9A227', size = 'md' }: IconProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`${sizeMap[size]} ${className}`}
      fill="none"
    >
      {/* Spiral from center outward */}
      <path
        d="M25,25
           Q25,20 30,20
           Q35,20 35,25
           Q35,32 27,32
           Q18,32 18,23
           Q18,12 30,12
           Q42,12 42,25
           Q42,40 25,40"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="25" cy="25" r="2" fill={color} />
    </svg>
  );
}

// Full width Art Deco Arch Header/Divider - Elaborate scalloped arch design
export function DecoArchDivider({ className = '', color = '#C9A227', bgColor = '#1a2836' }: { className?: string; color?: string; bgColor?: string }) {
  return (
    <svg
      viewBox="0 0 800 100"
      className={`w-full h-24 ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Central arch with layered scallops */}
      <path d="M300,100 Q300,30 400,15 Q500,30 500,100" fill={bgColor} stroke={color} strokeWidth="3" />
      <path d="M320,100 Q320,45 400,30 Q480,45 480,100" fill="none" stroke={color} strokeWidth="2" />
      <path d="M340,100 Q340,55 400,42 Q460,55 460,100" fill="none" stroke={color} strokeWidth="2" />
      <path d="M360,100 Q360,65 400,55 Q440,65 440,100" fill="none" stroke={color} strokeWidth="1.5" />

      {/* Radiating lines from bottom center */}
      <g stroke={color} strokeWidth="1.5">
        <line x1="400" y1="100" x2="400" y2="20" />
        <line x1="400" y1="100" x2="380" y2="25" />
        <line x1="400" y1="100" x2="420" y2="25" />
        <line x1="400" y1="100" x2="360" y2="35" />
        <line x1="400" y1="100" x2="440" y2="35" />
        <line x1="400" y1="100" x2="340" y2="50" />
        <line x1="400" y1="100" x2="460" y2="50" />
      </g>

      {/* Side stepped corner accents - left */}
      <g fill={color}>
        <rect x="50" y="70" width="60" height="30" />
        <rect x="60" y="55" width="40" height="15" />
        <rect x="70" y="45" width="20" height="10" />
      </g>

      {/* Side stepped corner accents - right */}
      <g fill={color}>
        <rect x="690" y="70" width="60" height="30" />
        <rect x="700" y="55" width="40" height="15" />
        <rect x="710" y="45" width="20" height="10" />
      </g>

      {/* Horizontal connecting lines */}
      <g stroke={color} strokeWidth="2">
        <line x1="120" y1="85" x2="280" y2="85" />
        <line x1="520" y1="85" x2="680" y2="85" />
      </g>

      {/* Small diamond accents */}
      <g fill={color}>
        <polygon points="200,85 207,78 214,85 207,92" />
        <polygon points="586,85 593,78 600,85 593,92" />
      </g>

      {/* Spiral scroll accents near corners */}
      <circle cx="140" cy="60" r="4" fill={color} />
      <circle cx="660" cy="60" r="4" fill={color} />
    </svg>
  );
}

// Elaborate Art Deco Panel - Full decorative panel with all elements combined
export function DecoElaboratePanel({ className = '', color = '#C9A227', bgColor = '#1a2836' }: { className?: string; color?: string; bgColor?: string }) {
  return (
    <svg
      viewBox="0 0 300 400"
      className={`w-full h-full ${className}`}
      fill="none"
    >
      {/* Outer frame */}
      <rect x="5" y="5" width="290" height="390" stroke={color} strokeWidth="3" fill={bgColor} />
      <rect x="15" y="15" width="270" height="370" stroke={color} strokeWidth="1" fill="none" />

      {/* Top stepped corner ornaments */}
      <g fill={color}>
        <polygon points="5,5 40,5 40,15 15,15 15,40 5,40" />
        <polygon points="295,5 260,5 260,15 285,15 285,40 295,40" />
      </g>

      {/* Bottom stepped corner ornaments */}
      <g fill={color}>
        <polygon points="5,395 40,395 40,385 15,385 15,360 5,360" />
        <polygon points="295,395 260,395 260,385 285,385 285,360 295,360" />
      </g>

      {/* Central arch motif */}
      <path d="M80,300 Q80,150 150,100 Q220,150 220,300" fill="none" stroke={color} strokeWidth="3" />
      <path d="M95,300 Q95,170 150,130 Q205,170 205,300" fill="none" stroke={color} strokeWidth="2" />
      <path d="M110,300 Q110,190 150,160 Q190,190 190,300" fill="none" stroke={color} strokeWidth="1.5" />

      {/* Radiating lines in arch */}
      <g stroke={color} strokeWidth="1">
        <line x1="150" y1="300" x2="150" y2="110" />
        <line x1="150" y1="300" x2="130" y2="120" />
        <line x1="150" y1="300" x2="170" y2="120" />
        <line x1="150" y1="300" x2="110" y2="140" />
        <line x1="150" y1="300" x2="190" y2="140" />
        <line x1="150" y1="300" x2="95" y2="170" />
        <line x1="150" y1="300" x2="205" y2="170" />
      </g>

      {/* Top sunburst */}
      <g stroke={color} strokeWidth="1.5">
        <line x1="150" y1="80" x2="150" y2="30" />
        <line x1="150" y1="80" x2="130" y2="35" />
        <line x1="150" y1="80" x2="170" y2="35" />
        <line x1="150" y1="80" x2="115" y2="45" />
        <line x1="150" y1="80" x2="185" y2="45" />
      </g>

      {/* Side palm fronds - left */}
      <g stroke={color} strokeWidth="1.5">
        <path d="M40,200 Q30,150 35,100" fill="none" />
        <path d="M40,200 Q25,160 25,120" fill="none" />
        <path d="M40,200 Q50,150 45,100" fill="none" />
      </g>

      {/* Side palm fronds - right */}
      <g stroke={color} strokeWidth="1.5">
        <path d="M260,200 Q270,150 265,100" fill="none" />
        <path d="M260,200 Q275,160 275,120" fill="none" />
        <path d="M260,200 Q250,150 255,100" fill="none" />
      </g>

      {/* Bottom decorative bar */}
      <g fill={color}>
        <rect x="100" y="340" width="100" height="8" />
        <rect x="120" y="352" width="60" height="5" />
        <polygon points="150,365 140,375 150,372 160,375" />
      </g>

      {/* Spiral accents */}
      <circle cx="60" cy="320" r="5" fill={color} />
      <circle cx="240" cy="320" r="5" fill={color} />
    </svg>
  );
}

// Simple Scallop Border - Repeating arch pattern for horizontal borders
export function DecoScallopBorder({ className = '', color = '#C9A227' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 800 40"
      className={`w-full h-10 ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Repeating scallop arches */}
      <g stroke={color} strokeWidth="2">
        <path d="M0,40 Q25,10 50,40" />
        <path d="M50,40 Q75,10 100,40" />
        <path d="M100,40 Q125,10 150,40" />
        <path d="M150,40 Q175,10 200,40" />
        <path d="M200,40 Q225,10 250,40" />
        <path d="M250,40 Q275,10 300,40" />
        <path d="M300,40 Q325,10 350,40" />
        <path d="M350,40 Q375,10 400,40" />
        <path d="M400,40 Q425,10 450,40" />
        <path d="M450,40 Q475,10 500,40" />
        <path d="M500,40 Q525,10 550,40" />
        <path d="M550,40 Q575,10 600,40" />
        <path d="M600,40 Q625,10 650,40" />
        <path d="M650,40 Q675,10 700,40" />
        <path d="M700,40 Q725,10 750,40" />
        <path d="M750,40 Q775,10 800,40" />
      </g>

      {/* Inner layer of scallops (offset) */}
      <g stroke={color} strokeWidth="1" opacity="0.5">
        <path d="M25,40 Q50,20 75,40" />
        <path d="M75,40 Q100,20 125,40" />
        <path d="M125,40 Q150,20 175,40" />
        <path d="M175,40 Q200,20 225,40" />
        <path d="M225,40 Q250,20 275,40" />
        <path d="M275,40 Q300,20 325,40" />
        <path d="M325,40 Q350,20 375,40" />
        <path d="M375,40 Q400,20 425,40" />
        <path d="M425,40 Q450,20 475,40" />
        <path d="M475,40 Q500,20 525,40" />
        <path d="M525,40 Q550,20 575,40" />
        <path d="M575,40 Q600,20 625,40" />
        <path d="M625,40 Q650,20 675,40" />
        <path d="M675,40 Q700,20 725,40" />
        <path d="M725,40 Q750,20 775,40" />
      </g>
    </svg>
  );
}
