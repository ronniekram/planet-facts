import React, { useState } from 'react';
import { PlanetDetails } from '../templates/planet';
import { ButtonLabel } from './button-utils';

export interface ClickProps {
	link?: string;
	button?: ButtonLabel;
	planetOverview: PlanetDetails;
	planetStructure: PlanetDetails;
	planetGeology: PlanetDetails;
}

export const handleButtonClick = ({
	button,
	link,
	planetOverview,
	planetStructure,
	planetGeology,
}: ClickProps) => {
	if (
		(button &&
			button.label.toLowerCase().includes('overview')) ||
		(link && link.toLowerCase().includes('overview'))
	) {
		return {
			content: planetOverview.content,
			source: planetOverview.source,
			planetImage: 'overview',
		};
	}
	if (
		(button &&
			button.label.toLowerCase().includes('structure')) ||
		(link && link.toLowerCase().includes('structure'))
	) {
		return {
			content: planetStructure.content,
			source: planetStructure.source,
			planetImage: 'structure',
		};
	}
	if (
		(button &&
			button.label.toLowerCase().includes('surface')) ||
		(link && link.toLowerCase().includes('surface'))
	) {
		return {
			content: planetGeology.content,
			source: planetGeology.source,
			planetImage: 'geology',
		};
	}
};
