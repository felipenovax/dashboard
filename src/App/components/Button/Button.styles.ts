import styled, { css } from 'styled-components';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	loading: boolean;
	width?: string;
	variant: 'primary' | 'default' | 'label' | 'link';
	size: 'small' | 'medium' | 'large';
}

const sizes = {
	small: {
		fontSize: '0.75rem',
		padding: '0.25rem 0.5rem',
		height: '27px',
		icon: '0.75rem',
		fontWeight: 500,
	},
	medium: {
		fontSize: '0.875rem',
		padding: '0.375rem 0.875rem',
		height: '35px',
		icon: '1rem',
		fontWeight: 600,
	},
	large: {
		fontSize: '1rem',
		padding: '0.5rem 1rem',
		height: '40px',
		icon: '1.25rem',
		fontWeight: 600,
	},
};

const colors: {
	[key: string]: {
		background: string;
		color: string;
		disabled: string;
		colorHover?: string;
		hover?: string;
	};
} = {
	label: {
		background: 'transparent',
		color: '#49505b',
		disabled: '#e5e6e5',
		colorHover: 'var(--primary)',
		hover: 'var(--primary-hover)',
	},
	default: {
		background: '#fff',
		color: '#49505b',
		disabled: '#e5e6e5',
	},
	primary: {
		background: 'var(--primary)',
		color: '#fff',
		disabled: '#ddeec6',
	},
	link: {
		background: 'transparent',
		color: '#49505b',
		disabled: '#e5e6e5',
		colorHover: 'var(--primary)',
		hover: 'transparent',
	},
};

export const Container = styled.button<IButtonProps>`
	display: flex;
	border-radius: 6px;
	border: ${({ variant }) =>
		variant === 'label' || variant === 'link' ? 'none' : '1px solid #e5e6e5'};
	width: ${({ width }) => width || 'max-content'};
	padding: ${({ size, variant }) =>
		variant === 'link' ? '0' : sizes[size].padding};
	font-size: ${({ size }) => sizes[size].fontSize};
	font-weight: ${({ size }) => sizes[size].fontWeight};
	font-family: inherit;
	background-color: ${({ variant }) => colors[variant].background};
	color: ${({ variant }) => colors[variant].color};
	transition:
		border-color 0.1s ease-in-out,
		box-shadow 0.1s ease-in-out;
	align-items: center;
	gap: 0.5rem;
	height: ${({ size }) => sizes[size].height};
	cursor: pointer;

	& > svg {
		width: ${({ size }) => sizes[size].icon};
		height: ${({ size }) => sizes[size].icon};
	}

	&:hover {
		border-color: ${({ variant }) =>
			colors[variant]?.hover || 'var(--primary)'};

		${({ variant }) =>
			colors[variant].hover &&
			css`
				background-color: ${colors[variant].hover};
				color: ${colors[variant].colorHover};
			`};
	}

	&:focus,
	&:focus-visible {
		outline: 1px solid var(--primary-100);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&:disabled:hover {
		border-color: transparent;
	}

	&:disabled:active {
		animation: none;
	}

	&:disabled > svg {
		opacity: 0.5;
	}

	&:disabled > span {
		opacity: 0.5;
	}

	&:disabled > span > svg {
		opacity: 0.5;
	}
`;
