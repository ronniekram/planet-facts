import * as React from "react";
import { GlobalStyles } from "twin.macro";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest}>
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
