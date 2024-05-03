import { useEffect, useMemo, useState } from 'react';
import { CountryCodes, FLAG_ASPECT_RATIO } from '../Flags';
import { ReactCountryFlagProps } from './ReactCountryFlag.type';

export function ReactCountryFlag({
  countryCode,
  height,
  width,
  style,
  size,
}: ReactCountryFlagProps) {
  const [flagPath, setFlagPath] = useState<string | undefined>();

  const [currentWidth, currentHeight] = useMemo(
    () => (size ? [size, size * FLAG_ASPECT_RATIO] : [width ?? 40, height]),
    [size, height, width],
  );

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
    <div
      style={{
        ...style,
        width: currentWidth ?? style?.width,
        height: currentHeight ?? style?.width,
      }}
    ></div>
  ) : (
    <img
      src={flagPath}
      alt={`Flag of ${countryCode}`}
      style={style}
      width={currentWidth}
      height={currentHeight}
    />
  );
}
