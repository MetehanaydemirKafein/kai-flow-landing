import { flagComponents, FlagFallback, type FlagSvgProps } from '@/data/flag-svgs';

interface FlagIconProps {
  countryCode: string;
  className?: string;
}

export function FlagIcon({ countryCode, className = "w-6 h-4" }: FlagIconProps) {
  // Get the flag component from the map
  const FlagComponent = flagComponents[countryCode];

  // If flag component exists, render it
  if (FlagComponent) {
    return <FlagComponent className={className} />;
  }

  // Otherwise, render fallback with generated colors
  return <FlagFallback countryCode={countryCode} className={className} />;
}
