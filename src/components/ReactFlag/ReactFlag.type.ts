import { CountryCodes, FlagsType } from '../Flags/Flags';

type LowercaseCountries = {
  [K in keyof FlagsType as Lowercase<K>]: FlagsType[K];
};

type LowercaseCountryCodes = keyof LowercaseCountries;

export interface ReactFlagProps {
  countryCode: CountryCodes | LowercaseCountryCodes;
  width?: number;
  height?: number;
}
