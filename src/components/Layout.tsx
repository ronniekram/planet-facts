import * as React from "react";
import tw, { GlobalStyles } from "twin.macro";
import "../assets/fonts/fonts.css";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest} tw="antialiased">
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
