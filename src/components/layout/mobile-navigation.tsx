import React from 'react';
import 'twin.macro';
import tw, { styled, css } from 'twin.macro';
import { Link } from 'gatsby';
import { NavLink, navLinks } from './navigation';
import { backgroundColors } from '../../utils/color-utils';
import chevron from '../../assets/icon-chevron.svg';

// STYLE
const mobileNavStyle = [];

const renderMobileLinks = () => {
	return navLinks.map(link => {
		return (
			<div tw="flex justify-between items-center content-center py-5">
				<div tw="flex justify-between items-center content-center">
					<div
						tw="w-5 h-5 rounded-full mr-5"
						css={[backgroundColors[link.color]]}
					/>
					<div tw="text-sm font-spartan font-bold uppercase leading-4 tracking-loosey">
						<Link to={link.url}>{link.name}</Link>
					</div>
				</div>

				<div>
					<img src={chevron} tw="opacity-50" />
				</div>
			</div>
		);
	});
};

const MobileNav = () => {
	return (
		<div
			tw="divide-y divide-grey-800/50 ml-5 mr-6"
			css={[
				`margin-top: 1.8125rem; margin-bottom: 4.125rem;`,
			]}
		>
			{renderMobileLinks()}
		</div>
	);
};

export default MobileNav;
