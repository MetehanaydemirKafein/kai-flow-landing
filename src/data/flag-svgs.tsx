import React from 'react';

// Common props for all flag SVG components
export interface FlagSvgProps {
  className?: string;
}

// Flag SVG Components as React elements
export const FlagTR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#E30613" width="900" height="600" />
    <circle cx="300" cy="300" r="120" fill="white" />
    <circle cx="360" cy="300" r="100" fill="#E30613" />
    <polygon points="420,250 450,300 420,350" fill="white" />
  </svg>
);

export const FlagUS: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#B22234" width="900" height="600" />
    <rect fill="white" width="900" height="46.15" />
    <rect fill="white" y="92.3" width="900" height="46.15" />
    <rect fill="white" y="184.6" width="900" height="46.15" />
    <rect fill="white" y="276.9" width="900" height="46.15" />
    <rect fill="white" y="369.2" width="900" height="46.15" />
    <rect fill="white" y="461.5" width="900" height="46.15" />
    <rect fill="#3C3B6B" width="360" height="323.08" />
  </svg>
);

export const FlagGB: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#012169" width="900" height="600" />
    <rect fill="#C8102E" x="375" y="0" width="150" height="600" />
    <rect fill="#C8102E" y="250" width="900" height="100" />
  </svg>
);

export const FlagDE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#000" width="900" height="200" />
    <rect fill="#D00" y="200" width="900" height="200" />
    <rect fill="#FFCE00" y="400" width="900" height="200" />
  </svg>
);

export const FlagFR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#002395" width="300" height="600" />
    <rect fill="white" x="300" width="300" height="600" />
    <rect fill="#ED2939" x="600" width="300" height="600" />
  </svg>
);

export const FlagIT: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#009246" width="300" height="600" />
    <rect fill="white" x="300" width="300" height="600" />
    <rect fill="#CE2B37" x="600" width="300" height="600" />
  </svg>
);

export const FlagES: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#C60B1E" width="900" height="150" />
    <rect fill="#FFC400" y="150" width="900" height="300" />
    <rect fill="#C60B1E" y="450" width="900" height="150" />
  </svg>
);

export const FlagNL: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#AE1C28" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <rect fill="#21468B" y="400" width="900" height="200" />
  </svg>
);

export const FlagBE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="black" width="300" height="600" />
    <rect fill="#FDD116" x="300" width="300" height="600" />
    <rect fill="#CE1126" x="600" width="300" height="600" />
  </svg>
);

export const FlagCH: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF0000" width="900" height="600" />
    <rect fill="white" x="300" y="200" width="300" height="200" />
    <rect fill="white" x="200" y="250" width="500" height="100" />
  </svg>
);

export const FlagAT: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#ED2939" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <rect fill="#ED2939" y="400" width="900" height="200" />
  </svg>
);

export const FlagSE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006AA7" width="900" height="600" />
    <rect fill="#FFCD00" x="200" y="0" width="100" height="600" />
    <rect fill="#FFCD00" y="200" width="900" height="100" />
  </svg>
);

export const FlagNO: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#BA0C2F" width="900" height="600" />
    <rect fill="white" x="200" y="0" width="100" height="600" />
    <rect fill="white" y="200" width="900" height="100" />
    <rect fill="#00205B" x="220" y="20" width="60" height="560" />
    <rect fill="#00205B" y="220" width="900" height="60" />
  </svg>
);

export const FlagDK: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#C8102E" width="900" height="600" />
    <rect fill="white" x="200" y="0" width="100" height="600" />
    <rect fill="white" y="200" width="900" height="100" />
  </svg>
);

export const FlagFI: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="600" />
    <rect fill="#003580" x="200" y="0" width="100" height="600" />
    <rect fill="#003580" y="200" width="900" height="100" />
  </svg>
);

export const FlagPL: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="300" />
    <rect fill="#DC143C" y="300" width="900" height="300" />
  </svg>
);

export const FlagCZ: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="300" />
    <rect fill="#D7141A" y="300" width="900" height="300" />
    <polygon points="0,0 300,300 0,600" fill="#11457E" />
  </svg>
);

export const FlagHU: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#CE2B37" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <rect fill="#21A038" y="400" width="900" height="200" />
  </svg>
);

export const FlagRO: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#002B7F" width="300" height="600" />
    <rect fill="#FCD116" x="300" width="300" height="600" />
    <rect fill="#CE1126" x="600" width="300" height="600" />
  </svg>
);

export const FlagGR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#0D5EAF" width="900" height="600" />
    <rect fill="white" y="0" width="900" height="100" />
    <rect fill="white" y="200" width="900" height="100" />
    <rect fill="white" y="400" width="900" height="100" />
  </svg>
);

export const FlagPT: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006600" width="360" height="600" />
    <rect fill="#FF0000" x="360" width="540" height="600" />
  </svg>
);

export const FlagIE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#169B62" width="300" height="600" />
    <rect fill="white" x="300" width="300" height="600" />
    <rect fill="#FF8000" x="600" width="300" height="600" />
  </svg>
);

export const FlagJP: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="600" />
    <circle cx="450" cy="300" r="180" fill="#BC002D" />
  </svg>
);

export const FlagCN: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#DE2910" width="900" height="600" />
    <polygon points="150,100 200,150 150,200 100,150" fill="#FFDE00" />
  </svg>
);

export const FlagIN: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF9933" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <circle cx="450" cy="300" r="60" fill="#0052CC" />
    <rect fill="#138808" y="400" width="900" height="200" />
  </svg>
);

export const FlagBR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#009B3A" width="900" height="600" />
    <polygon points="450,150 750,300 450,450 150,300" fill="#FFCC00" />
  </svg>
);

export const FlagMX: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006341" width="300" height="600" />
    <rect fill="white" x="300" width="300" height="600" />
    <rect fill="#CE1126" x="600" width="300" height="600" />
  </svg>
);

export const FlagCA: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF0000" width="225" height="600" />
    <rect fill="white" x="225" width="450" height="600" />
    <polygon points="450,150 500,300 450,450 400,300" fill="#FF0000" />
    <rect fill="#FF0000" x="675" width="225" height="600" />
  </svg>
);

export const FlagAU: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#00008B" width="900" height="600" />
    <polygon points="0,0 450,300 900,0 900,600 0,600" fill="#00008B" />
  </svg>
);

export const FlagNZ: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#002B7F" width="900" height="600" />
    <polygon points="0,0 450,300 900,0 900,600 0,600" fill="#002B7F" />
  </svg>
);

export const FlagSG: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF0000" width="900" height="300" />
    <rect fill="white" y="300" width="900" height="300" />
  </svg>
);

export const FlagMY: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF0000" width="450" height="600" />
    <rect fill="#003478" x="450" width="450" height="600" />
  </svg>
);

export const FlagTH: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#A51931" width="900" height="100" />
    <rect fill="white" y="100" width="900" height="100" />
    <rect fill="#002B5C" y="200" width="900" height="200" />
    <rect fill="white" y="400" width="900" height="100" />
    <rect fill="#A51931" y="500" width="900" height="100" />
  </svg>
);

export const FlagID: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FF0000" width="900" height="300" />
    <rect fill="white" y="300" width="900" height="300" />
  </svg>
);

export const FlagPH: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#0066FF" width="450" height="600" />
    <rect fill="#FFCC00" x="450" width="450" height="600" />
  </svg>
);

export const FlagVN: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#CE1126" width="900" height="600" />
    <polygon points="450,150 500,300 450,450 400,300" fill="#FFCC00" />
  </svg>
);

export const FlagKR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="600" />
    <circle cx="450" cy="300" r="120" fill="#C60C30" />
  </svg>
);

export const FlagHK: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#DE2910" width="900" height="600" />
  </svg>
);

export const FlagTW: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#0052CC" width="450" height="300" />
    <rect fill="white" x="450" width="450" height="300" />
    <rect fill="#FF0000" y="300" width="900" height="300" />
  </svg>
);

export const FlagZA: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#000000" width="900" height="120" />
    <rect fill="#FFB81C" y="120" width="900" height="120" />
    <rect fill="#007A5E" y="240" width="900" height="120" />
    <rect fill="#FFFFFF" y="360" width="900" height="120" />
    <rect fill="#DE3831" y="480" width="900" height="120" />
  </svg>
);

export const FlagEG: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#CE1126" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <rect fill="#007A5E" y="400" width="900" height="200" />
  </svg>
);

export const FlagSA: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006C35" width="900" height="600" />
  </svg>
);

export const FlagAE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#00732F" width="225" height="600" />
    <rect fill="white" x="225" width="225" height="600" />
    <rect fill="#000000" x="450" width="225" height="600" />
    <rect fill="#FF0000" x="675" width="225" height="600" />
  </svg>
);

export const FlagIL: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="600" />
    <rect fill="#0038B8" y="0" width="900" height="100" />
    <rect fill="#0038B8" y="500" width="900" height="100" />
  </svg>
);

export const FlagRU: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="white" width="900" height="200" />
    <rect fill="#0039A6" y="200" width="900" height="200" />
    <rect fill="#FF0000" y="400" width="900" height="200" />
  </svg>
);

export const FlagUA: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#4C7FED" width="900" height="300" />
    <rect fill="#FFD700" y="300" width="900" height="300" />
  </svg>
);

export const FlagAR: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#75AADB" width="900" height="200" />
    <rect fill="white" y="200" width="900" height="200" />
    <rect fill="#F6B800" y="400" width="900" height="200" />
  </svg>
);

export const FlagCL: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#0052CC" width="300" height="300" />
    <rect fill="white" x="300" width="600" height="300" />
    <rect fill="#CE1126" y="300" width="900" height="300" />
  </svg>
);

export const FlagCO: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FFD700" width="900" height="300" />
    <rect fill="#0052CC" y="300" width="900" height="150" />
    <rect fill="#CE1126" y="450" width="900" height="150" />
  </svg>
);

export const FlagPE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#CE1126" width="300" height="600" />
    <rect fill="white" x="300" width="300" height="600" />
    <rect fill="#CE1126" x="600" width="300" height="600" />
  </svg>
);

export const FlagVE: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#FFD700" width="900" height="200" />
    <rect fill="#0052CC" y="200" width="900" height="200" />
    <rect fill="#CE1126" y="400" width="900" height="200" />
  </svg>
);

export const FlagKZ: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#00AFCA" width="900" height="600" />
    <rect fill="#FFC72C" x="0" y="0" width="100" height="600" />
  </svg>
);

export const FlagPK: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006C35" width="450" height="600" />
    <rect fill="white" x="450" width="450" height="600" />
  </svg>
);

export const FlagBD: React.FC<FlagSvgProps> = ({ className }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect fill="#006C35" width="900" height="600" />
    <circle cx="450" cy="300" r="150" fill="#FF0000" />
  </svg>
);

// Fallback flag component for unknown country codes
export const FlagFallback: React.FC<FlagSvgProps & { countryCode: string }> = ({ className, countryCode }) => {
  const hash = countryCode.charCodeAt(0) + countryCode.charCodeAt(1);
  const hue1 = (hash * 137) % 360;
  const hue2 = (hash * 73) % 360;
  const hue3 = (hash * 211) % 360;

  return (
    <svg viewBox="0 0 900 600" className={className}>
      <rect fill={`hsl(${hue1}, 70%, 50%)`} width="300" height="600" />
      <rect fill={`hsl(${hue2}, 70%, 50%)`} x="300" width="300" height="600" />
      <rect fill={`hsl(${hue3}, 70%, 50%)`} x="600" width="300" height="600" />
    </svg>
  );
};

// Map of country codes to flag components
export const flagComponents: Record<string, React.FC<FlagSvgProps>> = {
  TR: FlagTR,
  US: FlagUS,
  GB: FlagGB,
  DE: FlagDE,
  FR: FlagFR,
  IT: FlagIT,
  ES: FlagES,
  NL: FlagNL,
  BE: FlagBE,
  CH: FlagCH,
  AT: FlagAT,
  SE: FlagSE,
  NO: FlagNO,
  DK: FlagDK,
  FI: FlagFI,
  PL: FlagPL,
  CZ: FlagCZ,
  HU: FlagHU,
  RO: FlagRO,
  GR: FlagGR,
  PT: FlagPT,
  IE: FlagIE,
  JP: FlagJP,
  CN: FlagCN,
  IN: FlagIN,
  BR: FlagBR,
  MX: FlagMX,
  CA: FlagCA,
  AU: FlagAU,
  NZ: FlagNZ,
  SG: FlagSG,
  MY: FlagMY,
  TH: FlagTH,
  ID: FlagID,
  PH: FlagPH,
  VN: FlagVN,
  KR: FlagKR,
  HK: FlagHK,
  TW: FlagTW,
  ZA: FlagZA,
  EG: FlagEG,
  SA: FlagSA,
  AE: FlagAE,
  IL: FlagIL,
  RU: FlagRU,
  UA: FlagUA,
  AR: FlagAR,
  CL: FlagCL,
  CO: FlagCO,
  PE: FlagPE,
  VE: FlagVE,
  KZ: FlagKZ,
  PK: FlagPK,
  BD: FlagBD,
};
