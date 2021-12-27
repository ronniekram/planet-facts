import React, { Dispatch, useState } from 'react';
import { Link } from 'gatsby';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import MobileNav from './mobile-navigation';
import burger from '../../assets/icon-hamburger.svg';
import { Color } from '../../utils/color-utils';
import './mobile.css';

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

const renderLinks = () => {
	return navLinks.map(link => {
		return (
			<li tw="list-none md:(leading-4 tracking-normal)">
				<Link
					to={link.url}
					tw="opacity-70 hocus:(opacity-100)"
				>
					{link.name}
				</Link>
			</li>
		);
	});
};

const Nav = () => {
	const [open, setOpen] = useState<boolean>(false);

	const buttonStyle = [
		tw`mr-6`,
		tw`md:(hidden)`,
		!open && tw`opacity-100`,
		open && tw`opacity-50`,
	];

	return (
		<>
			<nav tw="relative">
				<div tw="border-b border-grey-800/70 flex justify-between items-center content-center md:(flex-col) xl:(flex-row)">
					<div tw="font-antonio uppercase text-3xl tracking-tighest leading-6 ml-6 py-3.5 md:(pt-8 pb-0 ml-0) xl:(text-2xl py-6 ml-8)">
						The Planets
					</div>
					{/* MOBILE BUTTON  */}
					<button
						type="button"
						css={[buttonStyle]}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<img
							src={burger}
							alt="Hamburger icon for mobile menu"
							tw="w-6"
						/>
					</button>

					{/* TABLET & DESKTOP NAV LINKS  */}
					<div tw="hidden font-spartan font-bold uppercase py-3.5 md:(flex justify-evenly w-full text-3xs py-6 mx-14) xl:(w-1/2 justify-around mr-7)">
						{renderLinks()}
					</div>
				</div>
				<div
					tw="absolute z-10 bg-blue-900 w-full md:(hidden)"
					className={open ? 'slideIn' : ''}
				>
					{open ? (
						<div>
							<MobileNav />
						</div>
					) : null}
				</div>
			</nav>
		</>
	);
};

export default Nav;
