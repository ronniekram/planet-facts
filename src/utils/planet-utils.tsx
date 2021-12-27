import { GatsbyImageProps } from 'gatsby-plugin-image';
import SmallCard, {
	SmallCardProps,
} from '../components/cards/small-card';
import { Color } from './color-utils';

export type PlanetImage = {
	asset: { gatsbyImageData: GatsbyImageProps; url: string };
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
			slug: {
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
			image: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
					url: string;
				};
			};
			internalImage: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
					url: string;
				};
			};
			geologyImage: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
					url: string;
				};
			};
		};
	};
}

export const renderFacts = (facts: SmallCardProps[]) => {
	return facts.map(fact => {
		return <SmallCard title={fact.title} data={fact.data} />;
	});
};
