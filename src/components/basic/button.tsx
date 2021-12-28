import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import { textColors, Color } from '../../utils/color-utils';

// ===== COMPONENTS =====

export interface ButtonProps {
	number: string;
	label: string;
	activeColor: Color | string;
	onClick?: () => void;
}

const Button = ({
	number,
	label,
	activeColor,
	onClick,
}: ButtonProps) => {
	const [active, setActive] = useState<boolean>(false);

	const buttonStyles = [
		textColors[activeColor],
		tw`font-spartan font-bold uppercase`,
		tw`border border-white/50`,
		tw`bg-transparent`,
		tw`transition-colors duration-300`,
		tw`hover:(bg-grey-800 border-transparent)`,
		tw`focus:(border-transparent bg-current)`,
		tw`text-4xs leading-4 tracking-looser`,
		tw`xl:(text-2xs tracking-loosest)`,
		active && tw`bg-current`,
		`width: 17.5625rem; height: 2.5rem`,
		`@media (min-width: 1280px) { width: 21.875rem; height: 3rem; }`,
	];

	const labelStyles = [
		tw`flex items-center content-center justify-around text-white!`,
		tw`font-bold`,
		tw`ml-5 xl:(ml-7)`,
	];

	return (
		<button
			type="button"
			css={[buttonStyles]}
			tw="flex items-center content-center justify-start"
			onClick={onClick}
			onFocus={() => setActive(true)}
			onBlur={() => setActive(false)}
		>
			<div css={[labelStyles]}>
				<span tw="opacity-50">{number}</span>
				<span tw="px-7">{label}</span>
			</div>
		</button>
	);
};

export default Button;
