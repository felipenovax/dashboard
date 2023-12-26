import styled from 'styled-components';

export const Container = styled.div<{ tableWidth: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	height: 300px;
	position: relative;
	width: ${({ tableWidth }) => `${tableWidth}px`};

	&:after {
		content: 'There are no data to display';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow-x: hidden;
	}
`;
