import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled, css } from 'twin.macro';
import Layout from '../components/layout';
import Button from '../components/basic/button';
import { PlanetProps } from '../utils/planet-utils';

const Planet = ({ data }: PlanetProps) => {
	console.log(data);
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
			<div tw="w-screen h-screen flex justify-center items-center content-center">
				<h1>{name}</h1>
				<Button
					number="01"
					label="Overview"
					activeColor="purple-100"
					size="DESKTOP"
					active={false}
				/>
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
