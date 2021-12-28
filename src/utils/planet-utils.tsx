import React, { useState } from 'react';
import { Link } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import Button from '../components/basic/button';
import SmallCard, {
	SmallCardProps,
} from '../components/cards/small-card';
import { textColors, Color } from './color-utils';
import { handleButtonClick } from './event-utils';
import { ButtonLabel } from './button-utils';

export const mobileLinks = [
	'Overview',
	'Structure',
	'Surface',
];

export type PlanetImage = {
	caption: string;
	asset: {
		gatsbyImageData: IGatsbyImageData;
	};
};

export type PlanetDetails = {
	content: string;
	source: string;
};

export interface PlanetProps {
	data: {
		planet: {
			id: string;
			name: string;
			radius: string;
			revolution: string;
			rotation: string;
			temperature: string;
			color: Color | string;
			slug?: {
				current: Color | string;
			};
			planetOverview: {
				content: string;
				source: string;
			};
			planetStructure: {
				content: string;
				source: string;
			};
			planetGeology: {
				content: string;
				source: string;
			};
			image: PlanetImage;
			internalImage: PlanetImage;
			geologyImage: PlanetImage;
		};
	};
}

export interface MobileLinkProps {
	link?: string;
	button?: ButtonLabel;
	color?: Color | string;
	planetOverview: PlanetDetails;
	planetStructure: PlanetDetails;
	planetGeology: PlanetDetails;
	setCardState: (arg0: {
		content: string;
		source: string;
		planetImage: string;
	}) => void;
}

export const renderFacts = (facts: SmallCardProps[]) => {
	return facts.map(fact => {
		return (
			<SmallCard
				title={fact.title}
				data={fact.data}
				key={fact.title}
			/>
		);
	});
};

export const handleDeskButtonClick = ({
	button,
	planetOverview,
	planetStructure,
	planetGeology,
	setCardState,
}: MobileLinkProps) => {
	const info = handleButtonClick({
		button,
		planetOverview,
		planetStructure,
		planetGeology,
	});

	setCardState &&
		setCardState(
			info
				? info
				: {
						content: planetOverview.content,
						source: planetOverview.source,
						planetImage: 'overview',
				  }
		);
};

const handleMobileButtonClick = ({
	link,
	planetOverview,
	planetStructure,
	planetGeology,
	setCardState,
}: MobileLinkProps) => {
	const info = handleButtonClick({
		link,
		planetOverview,
		planetStructure,
		planetGeology,
	});

	setCardState &&
		setCardState(
			info
				? info
				: {
						content: planetOverview.content,
						source: planetOverview.source,
						planetImage: 'overview',
				  }
		);
};

export const renderMobileLink = ({
	link,
	color,
	planetOverview,
	planetStructure,
	planetGeology,
	setCardState,
}: MobileLinkProps) => {
	const [active, setActive] = useState(false);
	return (
		<Link
			to="#"
			key={link}
			css={[
				color && textColors[color],
				tw`opacity-50 border-b-4 border-transparent hocus:(opacity-100)`,
				tw`py-4`,
				tw`text-4xs leading-2 tracking-looser`,
				active && tw`border-b-4 border-current`,
			]}
			onClick={() => {
				handleMobileButtonClick({
					link,
					planetOverview,
					planetStructure,
					planetGeology,
					setCardState,
				});
			}}
			onFocus={() => setActive(true)}
			onBlur={() => setActive(false)}
		>
			<span tw="text-white!">{link}</span>
		</Link>
	);
};

export const renderButton = ({
	button,
	color,
	planetOverview,
	planetStructure,
	planetGeology,
	setCardState,
}: MobileLinkProps) => {
	return (
		<Button
			key={
				button ? button.label : Math.floor(Math.random() * 50)
			}
			number={button ? button.number : `0`}
			label={button ? button.label : ``}
			activeColor={color ? color : `white`}
			onClick={() => {
				handleDeskButtonClick({
					button,
					planetOverview,
					planetStructure,
					planetGeology,
					setCardState,
				});
			}}
		/>
	);
};
