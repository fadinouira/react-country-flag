import { CountryCodes, FlagsType } from '../Flags/Flags';
type LowercaseCountries = {
    [K in keyof FlagsType as Lowercase<K>]: FlagsType[K];
};
export type LowercaseCountryCodes = keyof LowercaseCountries;
export interface ReactCountryFlagProps {
    countryCode: CountryCodes | LowercaseCountryCodes;
    width?: number;
    height?: number;
}
export {};
//# sourceMappingURL=ReactCountryFlag.type.d.ts.map