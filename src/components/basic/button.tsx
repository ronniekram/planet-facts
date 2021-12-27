import React, { useState } from 'react';
import { SerializedStyles } from '@emotion/utils';
import tw, { styled, css, TwStyle } from 'twin.macro';
import { Color } from '../../utils/color-utils';

// ===== STYLES =====

// ===== COMPONENTS =====

export interface ButtonProps {
	number: string;
	label: string;
	activeColor: Color;
	active: boolean;
	onClick?: () => void;
}

const Button = ({
	number,
	label,
	activeColor,
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
		`width: 17.5625rem; height: 2.5rem`,
		`@media (min-width: 1280px) { width: 21.875rem; }`,
	];

	const labelStyles = [
		tw`flex items-center content-center justify-around`,
		tw`font-bold`,
		tw`ml-5 xl:(ml-7)`,
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
