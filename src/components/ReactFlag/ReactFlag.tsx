import { useEffect, useState } from 'react';
import { CountryCodes } from '../Flags/Flags';
import { ReactFlagProps } from './ReactFlag.type';

export default function ReactFlag({ countryCode, height, width }: ReactFlagProps) {
  const [flagPath, setFlagPath] = useState<string | undefined>();

  useEffect(() => {
    const loadFlag = async () => {
      try {
        const { default: FLAGS } = await import('../Flags/Flags');
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
