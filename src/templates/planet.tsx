import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import Layout from '../components/layout';
import { SmallCardProps } from '../components/cards/small-card';
import InfoCard from '../components/cards/info-card';
import { renderButtons } from '../utils/button-utils';
import {
	PlanetProps,
	renderFacts,
} from '../utils/planet-utils';

// ===== STYLES =====
let mobileLinkStyle = [
	tw`opacity-50 hocus:(opacity-100)`,
	tw`py-4`,
	tw`text-4xs leading-2 tracking-looser`,
	tw`border-b-4 border-teal-100/0`,
	tw`border-transparent`,
];

// ===== COMPONENTS =====
const mobileLinks = ['Overview', 'Structure', 'Surface'];

const Planet = ({ data }: PlanetProps) => {
	const {
		name,
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
		name: name,
		content: planetOverview.content,
		source: planetOverview.source,
	});

	const [showImage, setShowImage] = useState(
		image.asset.gatsbyImageData
	);

	const handleMobileClick = (link: string) => {
		if (link === 'Overview') {
			setCardInfo({
				name: name,
				content: planetOverview.content,
				source: planetOverview.source,
			});
		}
		if (link === 'Structure') {
			setCardInfo({
				name: name,
				content: planetStructure.content,
				source: planetStructure.source,
			});
		}
		if (link === `Surface`) {
			setCardInfo({
				name: name,
				content: planetGeology.content,
				source: planetGeology.source,
			});
		}
	};

	const renderMobileLinks = () => {
		return mobileLinks.map(link => (
			<Link
				to="#"
				css={[mobileLinkStyle]}
				onClick={() => handleMobileClick(link)}
			>
				{' '}
				{link}{' '}
			</Link>
		));
	};

	return (
		<Layout>
			<div tw="border-b border-grey-800/70 text-4xs font-spartan font-bold uppercase flex justify-between px-6 md:(hidden)">
				{renderMobileLinks()}
			</div>
			<div
				tw="mx-auto xl:(pb-14)"
				css={[
					`@media (min-width: 768px) { margin-top: 3.125rem; }`,
					`@media (min-width: 1280px) { margin-top: 7.875rem; }`,
				]}
			>
				<div
					tw="mx-auto xl:(flex justify-between)"
					css={[
						`width: 20.4375rem;`,
						`@media (min-width: 768px) { width: 43.0625rem; }`,
						`@media (min-width: 1280px) { width: 69.375rem; }`,
					]}
				>
					<div tw="flex justify-center py-20 md:(py-28) xl:(w-10/12)">
						<div
							css={[
								`width: 6.9375rem; height: 6.9375rem;`,
								`@media (min-width: 768px) { width: 11.5rem; height: 11.5rem; }`,
								`@media (min-width: 1280px) { width: 18.125rem;  height: 18.125rem; }`,
							]}
						>
							<GatsbyImage image={showImage} />
						</div>
					</div>
					<div
						tw="flex flex-col items-center content-center mx-auto mb-7 md:(flex-row w-full justify-between) xl:(flex-col mx-0)"
						css={[
							`@media (min-width: 768px) { height: 15.8125rem; }`,
							`@media (min-width: 1280px) { width: 21.875rem;  height: 33.8125rem; }`,
						]}
					>
						<InfoCard
							name={cardInfo.name}
							content={cardInfo.content}
							source={cardInfo.source}
						/>
						<div
							tw="hidden md:(flex flex-col justify-between)"
							css={[
								// `@media (min-width: 768px) { width: 17.5625rem; height: 9.5rem; }`,
								`@media (min-width: 768px) { height: 9.5rem; }`,
								`@media (min-width: 1280px) { width: 21.875rem; height: 11rem; }`,
							]}
						>
							{renderButtons(`orange-100`)}
						</div>
					</div>
				</div>
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
				asset {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
			internalImage {
				asset {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
			geologyImage {
				asset {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	}
`;
