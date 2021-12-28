import React from 'react';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PlanetImage } from '../../utils/planet-utils';
import './image.css';

interface ImageSectionProps {
	image: PlanetImage;
	showImage: PlanetImage;
}

const PlanetImages = ({
	image,
	showImage,
}: ImageSectionProps) => {
	const renderShowImage = () => {
		if (showImage.caption === 'geology') {
			return (
				<div tw="flex justify-center">
					<div tw="py-10 w-full flex justify-center xl:(py-0)">
						<GatsbyImage
							image={image.asset.gatsbyImageData}
							alt=""
							className={'planetImage'}
						/>
					</div>
					<div
						tw="hidden xl:(block absolute z-20 top-96)"
						css={[`width: 10.1875rem;`]}
					>
						<GatsbyImage
							image={showImage.asset.gatsbyImageData}
							alt=""
						/>
					</div>
				</div>
			);
		} else {
			return (
				<div tw="py-10 w-full flex justify-center xl:(py-0)">
					<GatsbyImage
						image={showImage.asset.gatsbyImageData}
						alt=""
						className={'planetImage'}
					/>
				</div>
			);
		}
	};

	return <>{renderShowImage()}</>;
};

export default PlanetImages;
