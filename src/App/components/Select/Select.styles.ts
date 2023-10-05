import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: block;
	float: right;
`;

export const Wrapper = styled.div<{ open?: boolean }>`
	display: none;
	position: absolute;
	right: 0;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	width: auto;
	max-width: 300px;
	min-width: 200px;
	border-radius: 4px;

	${({ open }) => open && 'display: block;'}
`;

export const Content = styled.div<{ open?: boolean }>`
	display: grid;
	gap: 4px;
	color: ${({ open }) => (open ? '#000' : 'transparent')};
	transition: all 0.2s ease-in-out;
	padding: 4px;
	border-radius: 4px;

	.select-item {
		cursor: pointer;
		padding: 4px 8px;
		transition: all 0.1s ease-in-out;

		&:hover {
			background-color: var(--primary-hover);
			color: var(--primary);
			font-weight: 500;
		}
	}
`;
