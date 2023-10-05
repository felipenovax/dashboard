import styled from 'styled-components';

type DefaultProps = {
	open: boolean;
};

export const Header = styled.div`
	z-index: 2;
	background-color: #fff;
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding-left: 10px;
	border-bottom: 1px solid #dadada;
`;

export const Content = styled.div<DefaultProps>`
	margin-left: ${({ open }) => (open ? '202px' : '60px')};
	transition: margin-left 0.5s;
	padding: 8px;
	background-color: #fff;
	height: calc(100vh - 77px);
	overflow-y: auto;
`;
