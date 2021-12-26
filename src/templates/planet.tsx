import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled, css } from 'twin.macro';
import { PlanetProps } from '../utils/planet-utils';


const Planet = ({ data }: PlanetProps) => {
  console.log(data);
  const { id, name, radius, revolution, rotation, temperature, slug, planetOverview, structureOverview, geologyOverview, image, internalImage, geologyImage } = data.planet;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )

};

export default Planet;

export const query = graphql`
  query ($slug: String!) {
    planet: sanityPlanet (
        slug: { current: { eq: $slug } } 
    ) {
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