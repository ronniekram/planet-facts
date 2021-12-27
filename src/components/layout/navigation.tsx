import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import burger from '../../assets/icon-hamburger.svg';

type NavLink = {
	name: string;
	url: string;
};

const navLinks: NavLink[] = [
	{ name: `Mercury`, url: `/planets/mercury` },
	{ name: `Venus`, url: `/planets/venus` },
	{ name: `Earth`, url: `/planets/earth` },
	{ name: `Mars`, url: `/planets/mars` },
	{ name: `Jupiter`, url: `/planets/jupiter` },
	{ name: `Saturn`, url: `/planets/saturn` },
	{ name: `Uranus`, url: `/planets/uranus` },
	{ name: `Neptune`, url: `/planets/neptune` },
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
	return (
		<nav tw="border-b border-grey-800/70 flex justify-between items-center content-center md:(flex-col) xl:(flex-row)">
			<div tw="font-antonio uppercase text-3xl tracking-tighest leading-6 ml-6 py-3.5 md:(pt-8 pb-0 ml-0) xl:(text-2xl py-6 ml-8)">
				The Planets
			</div>
			{/* MOBILE BUTTON  */}
			<div tw="w-6 mr-6 md:(hidden)">
				<img
					src={burger}
					alt="Hamburger icon for mobile menu"
				/>
			</div>

			{/* TABLET & DESKTOP NAV LINKS  */}
			<div tw="hidden font-spartan font-bold uppercase py-3.5 md:(flex justify-evenly w-full text-3xs py-6 mx-14) xl:(w-1/2 justify-around mr-7)">
				{renderLinks()}
			</div>
		</nav>
	);
};

export default Nav;
