import { FLAG_EMOJIS } from './Emojis';
import { UNTYPED_FLAGS } from './Flags';

export type FlagsType = typeof UNTYPED_FLAGS;

export type CountryCodes = keyof FlagsType;

export const FLAGS = UNTYPED_FLAGS as Record<CountryCodes, string>;
export const EMOJIS = FLAG_EMOJIS;

export const FLAG_ASPECT_RATIO = 0.72;
export const EMOJI_ASPECT_RATIO = 0.81;
