import styled from 'styled-components';

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

	th,
	td {
		text-align: left;
		padding: 8px;
		color: #777980;
		font-size: 0.775rem;
	}
`;
