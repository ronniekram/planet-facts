import { SerializedStyles } from '@emotion/utils';
import tw, { styled, TwStyle } from 'twin.macro';
// @ts-ignore
import { theme } from '../../configs/tailwind.config.js';

// ===== TYPES =====

// Theme Colors
const themeColors = theme.colors;

export type Color = keyof typeof themeColors;

// Background Colors
export const backgroundColors: {
	[key in Color]: (TwStyle | SerializedStyles)[];
} = {
	'white': [tw`bg-white`],
	'black': [tw`bg-black`],
	'transparent': [tw`bg-transparent`],
	'currentColor': [tw`bg-current`],
	'blue-100': [tw`bg-blue-100`],
	'blue-300': [tw`bg-blue-300`],
	'blue-900': [tw`bg-blue-900`],
	'orange-100': [tw`bg-orange-100`],
	'orange-300': [tw`bg-orange-300`],
	'red-100': [tw`bg-red-100`],
	'grey-100': [tw`bg-grey-100`],
	'grey-800': [tw`bg-grey-800`],
	'teal-100': [tw`bg-teal-100`],
	'gold-100': [tw`bg-gold-100`],
	'purple-100': [tw`bg-purple-100`],
	'mercury': [tw`bg-mercury`],
	'venus': [tw`bg-venus`],
	'earth': [tw`bg-earth`],
	'mars': [tw`bg-mars`],
	'jupiter': [tw`bg-jupiter`],
	'saturn': [tw`bg-saturn`],
	'uranus': [tw`bg-uranus`],
	'neptune': [tw`bg-neptune`],
};

// Text Colors
export const textColors: {
	[key in Color]: (TwStyle | SerializedStyles)[];
} = {
	'white': [tw`text-white`],
	'black': [tw`text-black`],
	'transparent': [tw`text-transparent`],
	'currentColor': [tw`text-current`],
	'blue-100': [tw`text-blue-100`],
	'blue-300': [tw`text-blue-300`],
	'blue-900': [tw`text-blue-900`],
	'orange-100': [tw`text-orange-100`],
	'orange-300': [tw`text-orange-300`],
	'red-100': [tw`text-red-100`],
	'grey-100': [tw`text-grey-100`],
	'grey-800': [tw`text-grey-800`],
	'teal-100': [tw`text-teal-100`],
	'gold-100': [tw`text-gold-100`],
	'purple-100': [tw`text-purple-100`],
};
