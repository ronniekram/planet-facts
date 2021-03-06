// TYPES
// FOR OVERVIEW, STRUCTURE & GEOLOGY
type CardInfo = {
	content: string;
	source: string;
};

// PLANET PAGE LABELS
export type ButtonLabel = {
	number: string;
	label: string;
};

export type ButtonLabels = ButtonLabel[];

export const buttonLabels: ButtonLabels = [
	{ number: '01', label: 'Overview' },
	{
		number: '02',
		label: 'Internal Structure',
	},
	{ number: '03', label: 'Surface Geology' },
];
