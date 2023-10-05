import styled from 'styled-components';

type StepProps = {
	last: boolean;
	active: boolean;
	complete: boolean;
};

export const Wrapper = styled.div`
	display: flex;
	width: auto;
	justify-content: space-around;
`;

export const Step = styled.span<StepProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	transition: all 0.3s ease-in-out;
	font-weight: 600;
	cursor: pointer;

	&:after {
		content: '';
		bottom: 0;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: ${({ complete, active }) =>
			complete && active ? 'var(--primary)' : '#fff'};
		border: 3px solid
			${({ active, complete }) => {
				if (active) return 'var(--primary)';
				if (complete) return 'var(--primary)';

				return '#e5e6e5';
			}};
		z-index: 2;
	}

	&:before {
		content: '';
		position: absolute;
		bottom: 5px;
		left: calc(50% + 3.5px);
		width: ${({ last }) => (last ? '0' : '100%')};
		height: 3px;
		z-index: 1;
		background: ${({ active }) => (active ? 'var(--primary)' : '#e5e6e5')};
	}
`;
