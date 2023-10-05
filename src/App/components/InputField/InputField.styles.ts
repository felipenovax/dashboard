import styled from 'styled-components';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	type: string;
}

export const FormItem = styled.div`
	align-items: end;
	position: relative;
	height: 50px;
	width: 100%;

	.magnifier {
		position: absolute;
		top: 10px;
		left: 10px;
		color: #495057;
	}

	.loading {
		position: absolute;
		top: 10px;
		right: 10px;
	}
`;

export const Label = styled.label<{ active: boolean; type?: string }>`
	position: absolute;
	top: ${({ active }) => (active ? '-0.7rem' : '0.5rem')};
	left: ${({ type }) => (type === 'search' ? '1.75rem' : '0.75rem')};
	font-size: ${({ active }) => (active ? '0.750rem' : '1rem')};
	font-weight: 600;
	line-height: 1.25rem;
	color: ${({ active }) => (active ? 'var(--primary-100)' : '#64778f')};
	background-color: #fff;
	padding: 0 0.25rem;
	transition: all 0.1s ease-in-out;
`;

export const Input = styled.input<IInputProps>`
	display: block;
	width: 100%;
	padding: ${({ type }) => {
		const padddingLeft = type === 'search' ? '1.75rem' : '0.75rem';
		const paddingRight = type === 'loading' ? '1.75rem' : '0.75rem';
		return `0.35rem ${paddingRight} 0.35rem ${padddingLeft}`;
	}};
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.4rem;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #d2d6da;
	appearance: none;
	height: 35px;
	border-radius: 4px;
	border: 1px solid rgb(229, 230, 229);
	font-family: inherit;
	transition:
		box-shadow 0.15s ease,
		border-color 0.15s ease;

	&:focus {
		box-shadow: 0 0 0 0.1rem var(--primary-100);
	}
`;
