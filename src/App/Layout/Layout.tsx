import React from 'react';
import { Content } from './Layout.styles';
import { SidePanel } from './components/SidePanel/SidePanel';
export const Layout = ({ children }: { children: React.ReactNode }) => {
	const [navOpen, setToggleNav] = React.useState(false);

	return (
		<>
			<SidePanel open={navOpen} toggleNav={setToggleNav} />
			<Content open={navOpen}>{children}</Content>
		</>
	);
};
