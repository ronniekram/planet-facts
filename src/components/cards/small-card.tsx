import React from 'react';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';

// STYLES

const smallCardStyle = [
	`width: 20.4375rem; height: 3rem;`,
	`@media (min-width: 768px) { width: 10.25rem; height: 5.5rem; }`,
	`@media (min-width: 1280px) { width: 15.9375rem; height: 8rem; }`,
];

const h4Style = [
	tw`font-bold font-spartan opacity-50 text-5xs`,
	tw`md:(leading-5 tracking-loose)`,
	tw`xl:(text-3xs leading-4 tracking-normal text-left)`,
];

const h2Style = [
	tw`font-medium font-antonio text-lg`,
	tw`md:(tracking-tighter leading-6 text-xl text-left)`,
	tw`xl:(text-4xl leading-7 tracking-extra-tight)`,
];

// COMPONENTS
export interface SmallCardProps {
	title: string;
	data: string;
}

const SmallCard = ({ title, data }: SmallCardProps) => {
	return (
		<div
			tw="flex uppercase border border-white/50"
			css={[smallCardStyle]}
		>
			<div tw="w-full flex items-center content-center justify-between mx-6 md:(self-center block)">
				<h4 css={[h4Style]}>{title}</h4>
				<h2 css={[h2Style]}>{data}</h2>
			</div>
		</div>
	);
};

export default SmallCard;
