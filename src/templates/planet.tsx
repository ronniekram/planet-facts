import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Nav from '../components/layout/navigation';
import InfoCard from '../components/cards/info-card';
import PlanetImages from '../components/planet/image';
import Button from '../components/basic/button';
import { SmallCardProps } from '../components/cards/small-card';
import {
	ButtonLabel,
	buttonLabels,
} from '../utils/button-utils';
import {
	PlanetProps,
	renderFacts,
	PlanetDetails,
} from '../utils/planet-utils';
import { handleButtonClick } from '../utils/event-utils';
import { textColors } from '../utils/color-utils';

// ===== STYLES =====

// ===== COMPONENTS =====
const mobileLinks = ['Overview', 'Structure', 'Surface'];

const Planet = ({ data }: PlanetProps) => {
	const {
		name,
		slug,
		radius,
		revolution,
		rotation,
		temperature,
		planetOverview,
		planetStructure,
		planetGeology,
		image,
		internalImage,
		geologyImage,
	} = data.planet;

	const planetFacts: SmallCardProps[] = [
		{ title: 'Rotation Time', data: rotation },
		{ title: 'Revolution Time', data: revolution },
		{ title: 'Radius', data: radius },
		{ title: 'Average Temp.', data: temperature },
	];

	const [cardInfo, setCardInfo] = useState({
		content: planetOverview.content,
		source: planetOverview.source,
	});

	const [showImage, setShowImage] = useState(image);

	const setCardState = (info: {
		content: string;
		source: string;
		planetImage: string;
	}) => {
		setCardInfo({
			content: info?.content,
			source: info?.source,
		});

		if (info?.planetImage === 'overview') {
			setShowImage(image);
		}
		if (info?.planetImage === 'structure') {
			setShowImage(internalImage);
		}
		if (info?.planetImage === 'geology') {
			setShowImage(geologyImage);
		}
	};

	const handleMobileButtonClick = (
		link: string,
		planetOverview: PlanetDetails,
		planetStructure: PlanetDetails,
		planetGeology: PlanetDetails
	) => {
		const info = handleButtonClick({
			link,
			planetOverview,
			planetStructure,
			planetGeology,
		});

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

	const handleDeskButtonClick = (
		button: ButtonLabel,
		planetOverview: PlanetDetails,
		planetStructure: PlanetDetails,
		planetGeology: PlanetDetails
	) => {
		const info = handleButtonClick({
			button,
			planetOverview,
			planetStructure,
			planetGeology,
		});

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

	const renderButton = (button: ButtonLabel) => {
		return (
			<Button
				number={button.number}
				label={button.label}
				activeColor={slug.current}
				onClick={() => {
					handleDeskButtonClick(
						button,
						planetOverview,
						planetStructure,
						planetGeology
					);
				}}
			/>
		);
	};

	const renderMobileLink = (link: string) => {
		const [active, setActive] = useState(false);
		return (
			<Link
				to="#"
				css={[
					textColors[slug.current],
					tw`opacity-50 border-b-4 border-transparent hocus:(opacity-100)`,
					tw`py-4`,
					tw`text-4xs leading-2 tracking-looser`,
					active && tw`border-b-4 border-current`,
				]}
				onClick={() => {
					handleMobileButtonClick(
						link,
						planetOverview,
						planetStructure,
						planetGeology
					);
				}}
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)}
			>
				<span tw="text-white!">{link}</span>
			</Link>
		);
	};

	return (
		<Layout>
			<SEO title={name} />
			<Nav />
			{/* MOBILE BUTTONS  */}
			<div tw="border-b border-grey-800/70 text-4xs font-spartan font-bold uppercase flex justify-between px-6 md:(hidden)">
				{mobileLinks.map(link => renderMobileLink(link))}
			</div>
			<div
				tw="mx-auto xl:(pb-14)"
				css={[
					`@media (min-width: 768px) { margin-top: 3.125rem; }`,
					`@media (min-width: 1280px) { margin-top: 7.875rem; }`,
				]}
			>
				<div
					tw="mx-auto xl:(flex justify-between items-center content-center)"
					css={[
						`width: 20.4375rem;`,
						`@media (min-width: 768px) { width: 43.0625rem; }`,
						`@media (min-width: 1280px) { width: 69.375rem; }`,
					]}
				>
					<div
						tw="flex items-center justify-center xl:(w-9/12 relative z-10)"
						css={[
							`@media (min-width: 1280px) { height: 36.375rem; }`,
						]}
					>
						{/* PLANET IMAGE  */}
						<PlanetImages
							image={image}
							showImage={showImage}
						/>
					</div>
					<div
						tw="flex flex-col items-center content-center mx-auto mb-7 md:(flex-row w-full justify-between) xl:(flex-col mx-0)"
						css={[
							`@media (min-width: 768px) { height: 15.8125rem; }`,
							`@media (min-width: 1280px) { width: 21.875rem;  height: 33.8125rem; }`,
						]}
					>
						{/* INFO CARD  */}
						<InfoCard
							name={name}
							content={cardInfo.content}
							source={cardInfo.source}
						/>

						{/* BUTTONS  */}
						<div
							tw="hidden md:(flex flex-col justify-between)"
							css={[
								`@media (min-width: 768px) { height: 9.5rem; }`,
								`@media (min-width: 1280px) { width: 21.875rem; height: 11rem; }`,
							]}
						>
							{buttonLabels.map(button =>
								renderButton(button)
							)}
						</div>
					</div>
				</div>

				{/* PLANET FACTS  */}
				<div
					tw="flex flex-col justify-between mx-auto md:(flex-row) xl:(mt-20)"
					css={[
						`width: 20.4375rem; height: 13.5rem`,
						`@media (min-width: 768px) { width: 43.0625rem; height: 5.5rem; }`,
						`@media (min-width: 1280px) { width: 69.375rem;  height: 8rem; }`,
					]}
				>
					{renderFacts(planetFacts)}
				</div>
			</div>
		</Layout>
	);
};

export default Planet;

export const query = graphql`
	query($slug: String!) {
		planet: sanityPlanet(slug: { current: { eq: $slug } }) {
			id
			name
			radius
			revolution
			rotation
			temperature
			color
			slug {
				current
			}
			planetOverview {
				content
				source
			}
			planetStructure {
				content
				source
			}
			planetGeology {
				content
				source
			}
			image {
				caption
				asset {
					gatsbyImageData(
						layout: CONSTRAINED
						placeholder: BLURRED
					)
				}
			}
			internalImage {
				caption
				asset {
					gatsbyImageData(
						layout: CONSTRAINED
						placeholder: BLURRED
					)
				}
			}
			geologyImage {
				caption
				asset {
					gatsbyImageData(
						layout: CONSTRAINED
						placeholder: BLURRED
					)
				}
			}
		}
	}
`;
