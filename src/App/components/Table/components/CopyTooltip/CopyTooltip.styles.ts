import styled from 'styled-components';

type CopyToolProps = {
	animation?: string;
	position: { x: number; y: number };
};

export const Container = styled.div<CopyToolProps>`
	position: fixed;
	top: ${({ position }) => `${position.y}px`};
	left: ${({ position }) => `${position.x}px`};
	width: auto;
	padding: 4px 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.7);
	color: #fff;
	font-size: 12px;
	font-weight: 500;
	border-radius: 4px;
	transition: opacity 1s ease-in-out;
	animation: ${({ animation }) => `${animation} 1.5s`};
	opacity: 0;
	z-index: 1000;

	@keyframes fadeOut {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
