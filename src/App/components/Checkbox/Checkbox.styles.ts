import styled, { css } from 'styled-components';

export const CheckboxForm = styled.label<{ disabled?: boolean }>`
	font-size: 1rem;
	font-weight: bold;
	line-height: 1;
	display: grid;
	grid-template-columns: 1em auto;
	gap: 0.5em;
	color: rgb(229, 230, 229);
	width: fit-content;

	${({ disabled }) =>
		disabled &&
		css`
			color: var(--form-control-disabled);
			cursor: not-allowed;
		`};
`;

export const ContainerCheckbox = styled.input.attrs({ type: 'checkbox' })`
	-webkit-appearance: none;
	appearance: none;
	background-color: transparent;
	margin: 0;
	color: currentColor;
	width: 1.5em;
	height: 1.5em;
	border: 0.15em solid currentColor;
	border-radius: 6px;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;

	&:checked {
		background-color: var(--primary-100);
		border: 0.15em solid var(--primary-100);
	}

	&:before {
		content: '';
		width: 0.9em;
		height: 0.9em;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
		transform: scale(0);
		transform-origin: bottom left;
		transition: 0s transform ease-in-out;
		box-shadow: inset 1em 1em #fff;
	}

	&:checked::before {
		transform: scale(1);
	}

	&:disabled {
		color: var(--form-control-disabled);
		cursor: not-allowed;
	}
`;
