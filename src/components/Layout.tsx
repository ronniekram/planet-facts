import * as React from 'react';
import 'twin.macro';
import tw, { GlobalStyles, css } from 'twin.macro';
import Nav from './layout/navigation';
import '../assets/fonts/fonts.css';

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest} tw="antialiased text-white">
		<Nav />
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
