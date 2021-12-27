import React, { useState } from 'react';
import { graphql } from 'gatsby';
import tw, { styled, css } from 'twin.macro';
import Layout from '../components/layout';
import SmallCard from '../components/basic/small-card';
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

	return (
		<Layout>
			<div tw="min-w-full min-h-screen m-auto">
				<SmallCard title="Radius" data={radius} />
				{renderButtons(`gold-100`)}
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
