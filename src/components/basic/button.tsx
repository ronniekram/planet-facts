import React, { useState } from 'react';
import { SerializedStyles } from '@emotion/utils';
import tw, { styled, css, TwStyle } from 'twin.macro';
import { Color } from '../../utils/color-utils';

// ===== STYLES =====

// ===== TYPES =====
const buttonSize = [`TABLET`, `DESKTOP`];

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

// ===== COMPONENTS =====

export interface ButtonProps {
	number: string;
	label: string;
	activeColor: Color;
	size: Size;
	active: boolean;
	onClick?: () => void;
}

const Button = ({
	number,
	label,
	activeColor,
	size,
	active = false,
	onClick,
}: ButtonProps) => {
	const [isActive, setIsActive] = useState<boolean>(active);

	const buttonStyles = [
		tw`font-spartan font-bold uppercase`,
		tw`bg-transparent`,
		tw`border border-white/50`,
		tw`hover:(bg-grey-800)`,
		tw`focus:(border-none)`,
		tw`text-4xs leading-4 tracking-looser`,
		tw`xl:(text-2xs tracking-loosest)`,
	];

	const labelStyles = [
		tw`flex items-center content-center justify-around`,
		tw`font-bold`,
		tw`px-5 xl:(px-7)`,
		size === `TABLET` && tw`ml-5`,
		size === `DESKTOP` && tw`ml-7`,
	];

	return (
		<button
			type="button"
			css={[buttonStyles]}
			tw="flex items-center content-center justify-start"
			onClick={() => setIsActive(!active)}
		>
			<div css={[labelStyles]}>
				<span tw="opacity-50">{number}</span>
				<span tw="px-7">{label}</span>
			</div>
		</button>
	);
};

export default Button;
