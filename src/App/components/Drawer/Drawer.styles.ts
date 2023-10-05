import styled from 'styled-components';

type ContainerProps = {
	open: boolean;
	width?: string;
};

export const Container = styled.div<ContainerProps>`
	width: ${({ open, width }) => (open ? width ?? '50%' : '0')};
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	z-index: 100;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	z-index: var(--zindex-drawer);
	transition: width 0.3s cubic-bezier(0.32, 0, 0.67, 0) 0s;
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: var(--zindex-drawer-backdrop);
`;
