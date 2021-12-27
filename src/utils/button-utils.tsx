import React, { SetStateAction } from 'react';
import Button from '../components/basic/button';
import tw, { styled, css } from 'twin.macro';
import { Color } from './color-utils';
import { handleButtonClick } from './event-utils';

// TYPES
// FOR OVERVIEW, STRUCTURE & GEOLOGY
type CardInfo = {
	content: string;
	source: string;
};

// PLANET PAGE LABELS
export type ButtonLabel = {
	number: string;
	label: string;
};

export type ButtonLabels = ButtonLabel[];

export const buttonLabels: ButtonLabels = [
	{ number: '01', label: 'Overview' },
	{
		number: '02',
		label: 'Internal Structure',
	},
	{ number: '03', label: 'Surface Geology' },
];

export const renderButtons = (
	activeStyle: Color,
	planetOverview: CardInfo,
	planetStructure: CardInfo,
	planetGeology: CardInfo,
	onClick: () => void
) => {
	return buttonLabels.map(button => {
		return (
			<Button
				number={button.number}
				label={button.label}
				activeColor={activeStyle}
			/>
		);
	});
};

const renderButton = (
	button: ButtonLabel,
	activeStyle: Color,
	planetOverview: CardInfo,
	planetStructure: CardInfo,
	planetGeology: CardInfo,
	onClick: () => void
) => {
	<Button
		number={button.number}
		label={button.label}
		activeColor={activeStyle}
	/>;
};
