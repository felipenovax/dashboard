import styled from 'styled-components';

type SpinnerContainerProps = {
	size?: string;
};

export const SpinnerContainer = styled.span<SpinnerContainerProps>`
	&:before {
		content: '';
		border-radius: 100%;
		display: block;
		cursor: wait;
		width: ${({ size }) => size || '18px'};
		height: ${({ size }) => size || '18px'};
		-webkit-animation: spin 0.5s infinite linear;
		animation: spin 0.5s infinite linear;
		border: 3px var(--primary) solid;
		border-left-color: var(--primary-100);
	}

	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
