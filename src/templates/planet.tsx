import React, { useState } from 'react';
import { graphql } from 'gatsby';
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

// ===== TYPES =====

// ===== COMPONENTS =====

const Planet = ({ data }: PlanetProps) => {
	const {
		id,
		name,
		radius,
		revolution,
		rotation,
		temperature,
		slug,
		planetOverview,
		structureOverview,
		geologyOverview,
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

	console.log(data.planet);
	return (
		<Layout>
			<div tw="min-w-full min-h-screen m-auto">
				<div
					tw="xl:(flex justify-between mx-auto)"
					css={[
						`@media (min-width: 1280px) { width: 69.375rem; }`,
					]}
				>
					<div tw="flex justify-center py-24 md:(py-28)">
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
						tw="flex justify-center items-center content-center mx-auto mb-7 md:(justify-between) xl:(flex-col mx-0)"
						css={[
							`@media (min-width: 768px) { width: 43.0625rem; height: 15.8125rem; }`,
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
								`@media (min-width: 768px) { width: 17.5625rem; height: 9.5rem; }`,
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
					gatsbyImageData
				}
			}
			internalImage {
				asset {
					gatsbyImageData
				}
			}
			geologyImage {
				asset {
					gatsbyImageData
				}
			}
		}
	}
`;
