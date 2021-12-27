import React, { useState } from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import Layout from '../components/layout';
import SmallCard from '../components/cards/small-card';
import InfoCard from '../components/cards/info-card';
import { renderButtons } from '../utils/button-utils';
import { PlanetProps } from '../utils/planet-utils';

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

	const [cardInfo, setCardInfo] = useState({
		name: name,
		content: planetOverview.content,
		source: planetOverview.source,
	});

	return (
		<Layout>
			<div tw="min-w-full min-h-screen m-auto">
				<div
					tw="flex justify-between items-center content-center mx-auto xl:(flex-col mx-0)"
					css={[
						`@media (min-width: 768px) { width: 43.0625rem; height: 15.8125rem; }`,
						`@media (min-width: 1280px) { width: 21.875rem;  height: 33.8125rem; }`,
					]}
				>
					<InfoCard
						name={name}
						content={planetOverview.content}
						source={planetOverview.source}
					/>
					<div
						tw="flex flex-col justify-between"
						css={[
							`@media (min-width: 768px) { width: 17.5625rem; height: 9.5rem; }`,
							`@media (min-width: 1280px) { width: 21.875rem; height: 11rem; }`,
						]}
					>
						{renderButtons(`orange-100`)}
					</div>
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
