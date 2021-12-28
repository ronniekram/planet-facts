import React, { useState } from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import MobileNav from './mobile-navigation';
import { navLinks } from '../../utils/nav-utils';
import burger from '../../assets/icon-hamburger.svg';
import './mobile.css';

const renderLinks = () => {
	return navLinks.map(link => {
		return (
			<li
				tw="list-none md:(leading-4 tracking-normal)"
				key={link.url}
			>
				<AniLink
					fade
					to={link.url}
					duration={1.5}
					tw="opacity-70 hocus:(opacity-100)"
				>
					{link.name}
				</AniLink>
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
