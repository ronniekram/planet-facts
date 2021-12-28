import { Color } from './color-utils';

export type NavLink = {
	name: string;
	url: string;
	color: Color;
};

export const navLinks: NavLink[] = [
	{
		name: `Mercury`,
		url: `/planets/mercury`,
		color: `mercury`,
	},
	{ name: `Venus`, url: `/planets/venus`, color: `venus` },
	{
		name: `Earth`,
		url: `/planets/earth`,
		color: `earth`,
	},
	{ name: `Mars`, url: `/planets/mars`, color: `mars` },
	{
		name: `Jupiter`,
		url: `/planets/jupiter`,
		color: `jupiter`,
	},
	{
		name: `Saturn`,
		url: `/planets/saturn`,
		color: `saturn`,
	},
	{
		name: `Uranus`,
		url: `/planets/uranus`,
		color: `uranus`,
	},
	{
		name: `Neptune`,
		url: `/planets/neptune`,
		color: `neptune`,
	},
];
