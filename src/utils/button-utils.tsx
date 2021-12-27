import Button from '../components/basic/button';
import { SerializedStyles } from '@emotion/utils';
import tw, { styled, css, TwStyle } from 'twin.macro';
import { Color } from './color-utils';

// SIZES
export const buttonSize = [`TABLET`, `DESKTOP`];

export type Size = typeof buttonSize[number];

export const buttonSizes: {
	[key in Size]: (TwStyle | SerializedStyles)[];
} = {
	TABLET: [
		css`
			width: 17.5625rem;
			height: 2.5rem;
		`,
	],
	DESKTOP: [
		css`
			width: 21.875rem;
			height: 2.5rem;
		`,
	],
};

// PLANET PAGE LABELS
export type ButtonLabel = {
	number: string;
	label: string;
	active: boolean;
};

export type ButtonLabels = ButtonLabel[];

export const buttonLabels: ButtonLabels = [
	{ number: '01', label: 'Overview', active: false },
	{
		number: '02',
		label: 'Internal Structure',
		active: false,
	},
	{ number: '03', label: 'Surface Geology', active: false },
];

export const renderButtons = (activeStyle: Color) => {
	return buttonLabels.map(button => {
		return (
			<Button
				number={button.number}
				label={button.label}
				activeColor={activeStyle}
				size="DESKTOP"
				active={button.active}
			/>
		);
	});
};
