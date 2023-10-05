import { IconType } from 'react-icons';
import {
	BiBookContent,
	BiCog,
	BiExit,
	BiGroup,
	BiHomeAlt2,
	BiMenu,
	BiNetworkChart,
	BiX,
} from 'react-icons/bi';
import LogoIcon from '../../assets/logo.png';
import LogoIconSmall from '../../assets/logo_ico.png';
import { Container, Item, Link, Logo } from './SidePanel.styles';

type SidePanelProps = {
	open: boolean;
	toggleNav: (open: boolean) => void;
};

type NavLinkProps = {
	label: string;
	icon: IconType;
	href: string;
	className?: string;
}[];

const NavLinks: NavLinkProps = [
	{
		label: 'Home',
		icon: BiHomeAlt2,
		href: '/',
	},
	{
		label: 'Settings',
		icon: BiCog,
		href: '/settings',
	},
	{
		label: 'Groups',
		icon: BiGroup,
		href: '/groups',
	},
	{
		label: 'About',
		icon: BiBookContent,
		href: '/about',
	},
	{
		label: 'Analytics',
		icon: BiNetworkChart,
		href: '/analytics',
	},
	{
		label: 'Logout',
		icon: BiExit,
		href: '/logout',
		className: 'logout-btn',
	},
];

export const SidePanel = ({ open, toggleNav }: SidePanelProps) => {
	const getActiveStatus = (href: string) => {
		return window.location.pathname === href;
	};

	return (
		<Container id="layout-side-panel" open={open}>
			<Logo open={open} width="100%" src={open ? LogoIcon : LogoIconSmall} />
			<Link
				preventHover
				href="javascript:void(0)"
				onClick={() => toggleNav(!open)}
			>
				<span>{open ? <BiX /> : <BiMenu />}</span>
			</Link>
			{NavLinks.map(({ href, label, icon: Icon, ...rest }) => (
				<Link active={getActiveStatus(href)} href={href} key={label} {...rest}>
					<Item open={open}>
						<Icon />
						<span>{label}</span>
					</Item>
				</Link>
			))}
		</Container>
	);
};
