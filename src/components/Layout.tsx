import * as React from 'react';
import tw, { GlobalStyles, css } from 'twin.macro';
import '../assets/fonts/fonts.css';
import stars from '../assets/background-stars.svg';

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div
		{...rest}
		tw="antialiased text-white bg-blue-900 w-screen h-screen"
		css={[`background-image: url(${stars});`]}
	>
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
