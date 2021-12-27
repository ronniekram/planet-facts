import React from 'react';
import tw, { styled, css } from 'twin.macro';
import sourceIcon from '../../assets/icon-source.svg';

// STYLES

// TYPES
export type Overview = {
	name: string;
	content: string;
	source: string;
};

// COMPONENTS

const Overview = ({ name, content, source }: Overview) => {
	return (
		<div tw="text-center">
			<h1 tw="font-antonio text-4xl leading-7 uppercase">
				{name}
			</h1>
			<p tw="font-spartan text-3xs leading-3">{content}</p>
			<p tw="font-spartan text-2xs opacity-50 leading-4">
				<span>Source: </span>{' '}
				<span tw="font-bold underline">
					<a href={source} target="_blank">
						Wikipedia
						<img src={sourceIcon} alt="" />
					</a>
				</span>
			</p>
		</div>
	);
};

export default Overview;
