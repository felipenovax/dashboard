import styled, { css } from 'styled-components';

type DefaultProps = {
	open: boolean;
};

type LinkProps = {
	active?: boolean;
	nohover?: boolean;
};

export const Container = styled.div<DefaultProps>`
	position: relative;
	z-index: 1;
	height: 100vh;
	width: ${({ open }) => (open ? '202px' : '60px')};
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #f7f7f7;
	overflow-x: hidden;
	transition: 0.5s;
	border-right: 1px solid #dadada;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	.logout-btn {
		position: absolute;
		bottom: 20px;
		width: 100%;
	}
`;

export const Link = styled.a<LinkProps>`
	position: relative;
	padding: 8px 0;
	text-decoration: none;
	font-size: 1rem;
	color: #818181;
	display: block;
	transition: 0.3s;
	text-align: left;
	white-space: nowrap;
	margin: 0 8px;
	border-radius: 4px;
	display: grid;

	& > span {
		margin-left: 10px;
		gap: 10px;

		& > svg {
			margin-left: 4px;
		}
	}

	&:hover {
		color: ${({ nohover }) => (nohover ? '#818181' : 'var(--primary)')};
		background-color: ${({ nohover }) =>
			nohover ? 'inherit' : 'var(--primary-hover)'};
	}

	${({ active }) =>
		active &&
		css`
			color: var(--primary);
			background-color: var(--primary-hover);
			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 80%;
				width: 2px;
				background-color: var(--primary);
				margin: 4px 0;
			}
		`};
`;

export const Item = styled.span<DefaultProps>`
	display: grid;
	grid-template-columns: 24px 1fr;
	align-items: center;

	& > span {
		color: ${({ open }) => (open ? 'inherit' : 'transparent')};
	}
`;

export const Logo = styled.img<{ open: boolean }>`
	height: 88px;
	padding: ${({ open }) => (open ? '16px 18px' : '23px 12px 28px 12px')};
	transition: padding 0.3s linear;
`;
