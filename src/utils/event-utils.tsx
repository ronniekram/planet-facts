import React, { useState } from 'react';

export const handleMobileClick = (
	link: string,
	planetOverview: { content: string; source: string },
	planetStructure: { content: string; source: string },
	planetGeology: { content: string; source: string }
) => {
	if (link === 'Overview') {
		return {
			content: planetOverview.content,
			source: planetOverview.source,
		};
	}
	if (link === 'Structure') {
		return {
			content: planetStructure.content,
			source: planetStructure.source,
		};
	}
	if (link === `Surface`) {
		return {
			content: planetGeology.content,
			source: planetGeology.source,
		};
	}
};
