import Button from '../components/basic/button';
import { SerializedStyles } from '@emotion/utils';
import tw, { styled, css, TwStyle } from 'twin.macro';
import { Color } from './color-utils';

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
				active={button.active}
			/>
		);
	});
};
