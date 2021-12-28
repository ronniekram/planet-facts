import React, { useState } from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Nav from '../components/layout/navigation';
import InfoCard from '../components/cards/info-card';
import PlanetImages from '../components/planet/image';
import { SmallCardProps } from '../components/cards/small-card';
import { buttonLabels } from '../utils/button-utils';
import {
	PlanetProps,
	renderMobileLink,
	renderButton,
	renderFacts,
	mobileLinks,
} from '../utils/planet-utils';
import './planet.css';

// ===== STYLES =====
const MobileContainer = styled.div`
	${tw`border-b border-grey-800/70 text-4xs font-spartan font-bold uppercase flex justify-between px-6 md:(hidden)`}
`;

const ImageContainer = styled.div`
	${tw`flex items-center justify-center xl:(w-9/12 relative z-10)`};
	@media (min-width: 1280px) {
		height: 36.375rem;
	} ;
`;

const ButtonContainer = styled.div`
	${tw`hidden md:(flex flex-col justify-between)`};
	@media (min-width: 768px) {
		height: 9.5rem;
	}
	@media (min-width: 1280px) {
		width: 21.875rem;
		height: 11rem;
	} ;
`;

const FactsContainer = styled.div`
	${tw`flex flex-col justify-between mx-auto md:(flex-row) xl:(mt-20)`};
	width: 20.4375rem;
	height: 13.5rem;
	@media (min-width: 768px) {
		width: 43.0625rem;
		height: 5.5rem;
	}
	@media (min-width: 1280px) {
		width: 69.375rem;
		height: 8rem;
	} ;
`;

// ===== COMPONENTS =====

const Planet = ({ data }: PlanetProps) => {
	const {
		name,
		radius,
		revolution,
		rotation,
		temperature,
		color,
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

	console.log(color);

	return (
		<Layout>
			<Nav />
			<SEO title={name} />
			{/* MOBILE BUTTONS  */}
			<MobileContainer>
				{mobileLinks.map(link =>
					renderMobileLink({
						link,
						color,
						planetOverview,
						planetStructure,
						planetGeology,
						setCardState,
					})
				)}
			</MobileContainer>

			<div
				tw="mx-auto xl:(pb-14)"
				css={[
					`@media (min-width: 768px) { margin-top: 3.125rem; }`,
					`@media (min-width: 1280px) { margin-top: 7.875rem; }`,
				]}
				className="fadeIn"
			>
				<div
					tw="mx-auto xl:(flex justify-between items-center content-center)"
					css={[
						`width: 20.4375rem;`,
						`@media (min-width: 768px) { width: 43.0625rem; }`,
						`@media (min-width: 1280px) { width: 69.375rem; }`,
					]}
				>
					<ImageContainer>
						{/* PLANET IMAGE  */}
						<PlanetImages
							image={image}
							showImage={showImage}
						/>
					</ImageContainer>

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
						<ButtonContainer>
							{buttonLabels.map(button =>
								renderButton({
									button,
									color,
									planetOverview,
									planetStructure,
									planetGeology,
									setCardState,
								})
							)}
						</ButtonContainer>
					</div>
				</div>

				{/* PLANET FACTS  */}
				<FactsContainer>
					{renderFacts(planetFacts)}
				</FactsContainer>
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
