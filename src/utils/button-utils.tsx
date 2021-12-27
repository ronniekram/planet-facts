import React, { Dispatch, SetStateAction } from 'react';
import Button from '../components/basic/button';
import { SerializedStyles } from '@emotion/utils';
import tw, { styled, css, TwStyle } from 'twin.macro';
import { Color } from './color-utils';

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

export const renderButtons = (
	activeStyle: Color,
	setCardInfo: (arg0: CardInfo) => SetStateAction<CardInfo>,
	planetOverview: CardInfo,
	planetStructure: CardInfo,
	planetGeology: CardInfo
) => {
	const handleButtonClick = (button: ButtonLabel) => {
		if (button.label === 'Overview') {
			setCardInfo({
				content: planetOverview.content,
				source: planetOverview.source,
			});
		}
		if (button.label === 'Internal Structure') {
			setCardInfo({
				content: planetStructure.content,
				source: planetStructure.source,
			});
		}
		if (button.label === 'Surface Geology') {
			setCardInfo({
				content: planetGeology.content,
				source: planetGeology.source,
			});
		}
	};
	return buttonLabels.map(button => {
		return (
			<Button
				number={button.number}
				label={button.label}
				activeColor={activeStyle}
				active={button.active}
				onClick={() => handleButtonClick(button)}
			/>
		);
	});
};
