import styled, { css } from 'styled-components';

export const Row = styled.tr`
	border-bottom: 1px solid #ddd;
	background-color: #fff;

	&:hover {
		background-color: #f9f9fb;
	}

	&.active {
		background-color: #f9f9fb;
	}
`;

export const Td = styled.td<{ pinned?: boolean; pointer?: boolean }>`
	cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};

	${({ pinned }) =>
		pinned &&
		css`
			position: sticky;
			left: 0;
			z-index: 1;
			background-color: #fff;
		`}
`;
