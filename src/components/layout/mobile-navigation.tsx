import React from 'react';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { navLinks } from '../../utils/nav-utils';
import { backgroundColors } from '../../utils/color-utils';
import chevron from '../../assets/icon-chevron.svg';

// STYLE

const renderMobileLinks = () => {
	return navLinks.map(link => {
		return (
			<div
				key={link.name}
				tw="flex justify-between items-center content-center py-5"
			>
				<div
					tw="flex justify-between items-center content-center text-sm font-spartan font-bold uppercase tracking-loosey"
					css={[`height: 1.5rem;`]}
				>
					<div
						tw="w-5 h-5 rounded-full mr-5"
						css={[backgroundColors[link.color]]}
					/>
					<AniLink
						fade
						to={link.url}
						duration={1.5}
						tw="pt-1"
					>
						{link.name}
					</AniLink>
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
