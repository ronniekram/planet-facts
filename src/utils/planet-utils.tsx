import { IGatsbyImageData } from 'gatsby-plugin-image';
import SmallCard, {
	SmallCardProps,
} from '../components/cards/small-card';
import { Color } from './color-utils';

export type PlanetImage = {
	caption: string;
	asset: {
		gatsbyImageData: IGatsbyImageData;
	};
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
			color: Color | string;
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
			image: PlanetImage;
			internalImage: PlanetImage;
			geologyImage: PlanetImage;
		};
	};
}

export const renderFacts = (facts: SmallCardProps[]) => {
	return facts.map(fact => {
		return <SmallCard title={fact.title} data={fact.data} />;
	});
};
