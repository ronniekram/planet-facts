import { GatsbyImageProps } from 'gatsby-plugin-image';
import SmallCard, {
	SmallCardProps,
} from '../components/cards/small-card';

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
				current: string;
			};
			planetOverview: {
				content: string;
				source: string;
			};
			structureOverview: {
				content: string;
				source: string;
			};
			geologyOverview: {
				content: string;
				source: string;
			};
			image: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
				};
			};
			internalImage: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
				};
			};
			geologyImage: {
				asset: {
					gatsbyImageData: GatsbyImageProps;
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
