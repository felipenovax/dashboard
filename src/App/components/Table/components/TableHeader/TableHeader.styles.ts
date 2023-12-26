import styled, { css } from 'styled-components';

type TableHeaderProps = {
	width?: string;
	pinned?: boolean;
};

export const Container = styled.th<TableHeaderProps>`
	background-color: #f9f9fb;
	color: #777980;
	font-size: 0.775rem;
	width: ${({ width }) => width || 'auto'};

	${({ pinned }) =>
		pinned &&
		css`
			position: sticky;
			top: 0;
			z-index: 1;
			left: 4px;
		`}
`;

export const HeaderItem = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	justify-content: space-between;

	.sort-icon-active {
		color: var(--primary);
	}

	svg {
		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
	}
`;
