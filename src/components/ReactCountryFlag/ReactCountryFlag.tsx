import { useEffect, useState } from 'react';
import { CountryCodes } from '../Flags';
import { ReactCountryFlagProps } from './ReactCountryFlag.type';

export function ReactCountryFlag({ countryCode, height, width }: ReactCountryFlagProps) {
  const [flagPath, setFlagPath] = useState<string | undefined>();

  useEffect(() => {
    const loadFlag = async () => {
      try {
        const { FLAGS } = await import('../Flags');
        setFlagPath(FLAGS[(countryCode as string).toUpperCase() as CountryCodes]);
      } catch (error) {
        console.error(`Error loading flag for ${countryCode}:`, error);
        setFlagPath(undefined);
      }
    };

    loadFlag();
  }, [countryCode]);

  return !flagPath ? (
    <div style={{ width: width ?? 40, height }}></div>
  ) : (
    <img src={flagPath} alt={`Flag of ${countryCode}`} width={width} height={height} />
  );
}
