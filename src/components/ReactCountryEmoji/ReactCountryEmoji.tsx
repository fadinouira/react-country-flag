import { useEffect, useMemo, useState } from 'react';
import { CountryCodes, EMOJIS, EMOJI_ASPECT_RATIO } from '../Flags';
import { ReactCountryFlagProps } from '../ReactCountryFlag/ReactCountryFlag.type';

export function ReactCountryEmoji({ countryCode, height, style, size }: ReactCountryFlagProps) {
  const [flagEmoji, setFlagEmoji] = useState<string | undefined>('');

  const [currentFontSize] = useMemo(
    () => (size ? [size * EMOJI_ASPECT_RATIO] : [(height ?? 40) * EMOJI_ASPECT_RATIO]),
    [size, height],
  );

  useEffect(() => {
    const loadFlag = async () => {
      try {
        setFlagEmoji(EMOJIS[(countryCode as string).toUpperCase() as CountryCodes]);
      } catch (error) {
        console.error(`Error loading flag for ${countryCode}:`, error);
        setFlagEmoji('');
      }
    };

    loadFlag();
  }, [countryCode]);

  return (
    <div
      style={{
        ...style,
        lineHeight: `${currentFontSize}px`,
        fontSize: `${currentFontSize}px`,
      }}
    >
      {flagEmoji}
    </div>
  );
}
