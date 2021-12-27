import React from 'react';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';

interface SmallCardProps {
	title: string;
	data: string;
}

const SmallCard = ({ title, data }: SmallCardProps) => {
	return (
		<div
			tw="flex uppercase border border-white/50"
			css={[`width: 15.9375rem; height: 8rem;`]}
		>
			<div tw="flex flex-col self-center ml-6">
				<h4 tw="text-h4 font-bold font-spartan opacity-50 leading-h4 tracking-h4">
					{title}
				</h4>
				<h2 tw="text-h2 font-medium font-antonio leading-h2 tracking-h2">
					{data}
				</h2>
			</div>
		</div>
	);
};

export default SmallCard;
