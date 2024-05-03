import { CSSProperties } from 'react';
import { CountryCodes, FlagsType } from '../Flags';

type LowercaseCountries = {
  [K in keyof FlagsType as Lowercase<K>]: FlagsType[K];
};

export type LowercaseCountryCodes = keyof LowercaseCountries;

export interface ReactCountryFlagProps {
  countryCode: CountryCodes | LowercaseCountryCodes;
  width?: number;
  height?: number;
  style?: CSSProperties;
  size?: number;
}
