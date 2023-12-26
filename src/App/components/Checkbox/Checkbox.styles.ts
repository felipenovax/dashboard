import styled, { css } from 'styled-components';

type SizeProps = 'small' | 'medium' | 'large';

type CheckboxProps = {
	size: SizeProps;
};

const sizes = {
	large: '27px',
	medium: '24px',
	small: '19px',
};

const getSize = (size: SizeProps) => {
	return sizes[size];
};

export const CheckboxForm = styled.div<{ disabled?: boolean }>`
	font-size: 1rem;
	font-weight: bold;
	line-height: 1;
	display: grid;
	grid-template-columns: 1em auto;
	gap: 0.5em;
	color: rgb(229, 230, 229);
	width: fit-content;
	cursor: pointer;

	${({ disabled }) =>
		disabled &&
		css`
			color: var(--form-control-disabled);
			cursor: not-allowed;
		`};
`;

export const ContainerCheckbox = styled.input.attrs({
	type: 'checkbox',
})<CheckboxProps>`
	-webkit-appearance: none;
	appearance: none;
	background-color: transparent;
	margin: 0;
	color: currentColor;
	width: ${({ size }) => getSize(size)};
	height: ${({ size }) => getSize(size)};
	border: 0.15em solid currentColor;
	border-radius: 6px;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;
	cursor: pointer;

	&:checked {
		background-color: var(--primary);
		border: 0.15em solid var(--primary);
	}

	&:before {
		content: '';
		width: ${({ size }) => getSize(size)};
		height: ${({ size }) => getSize(size)};
		clip-path: polygon(
			17% 54%,
			28% 43%,
			38% 54%,
			70% 22%,
			81% 33%,
			38% 75%,
			17% 54%
		);
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
