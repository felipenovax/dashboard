import styled from 'styled-components';

type TableHeaderProps = {
	width?: string;
};

export const Wrapper = styled.div`
	overflow-x: hidden;
`;

export const Container = styled.div`
	overflow-x: auto;
`;

export const TableElement = styled.table`
	width: 100%;
	border: 1px #ddd;
	border-style: solid solid none solid;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	table-layout: fixed;
	padding-bottom: 10px;

	scrollbar-width: thin;
	scrollbar-color: #397524 #dfe9eb;

	::-webkit-scrollbar {
		width: 9px;
		width: 9px;
	}

	::-webkit-scrollbar-track {
		border-radius: 5px;
		background-color: #dfe9eb;
	}

	::-webkit-scrollbar-track:hover {
		background-color: #b8c0c2;
	}

	::-webkit-scrollbar-track:active {
		background-color: #b8c0c2;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #397524;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #62a34b;
	}

	::-webkit-scrollbar-thumb:active {
		background-color: #62a34b;
	}

	th,
	td {
		text-align: left;
		padding: 8px;
		color: #777980;
		font-size: 0.775rem;
	}
`;

export const TableHeader = styled.th<TableHeaderProps>`
	background-color: #f9f9fb;
	color: #777980;
	font-size: 0.775rem;
	width: ${({ width }) => width || 'auto'};
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

export const Row = styled.tr`
	border-bottom: 1px solid #ddd;
	background-color: #fff;
`;
