import styled from 'styled-components';

type SpanProps = {
	variant: 'default' | 'primary' | 'secondary' | 'tertiary';
	type: 'chip' | 'tag';
};

const colors = {
	default: {
		background: '#e9ecef59',
		color: '#adb5bd',
	},
	primary: {
		background: '#358c6659',
		color: '#358c66',
	},
	secondary: {
		background: '#6c27e759',
		color: '#6c27e7',
	},
	tertiary: {
		background: '#77c4ea59',
		color: '#77c4ea',
	},
};

export const Span = styled.span<SpanProps>`
	display: block;
	background-color: ${({ variant }) => colors[variant].background};
	color: ${({ variant }) => colors[variant].color};
	cursor: pointer;
	border-radius: ${({ type }) => (type === 'chip' ? '12px' : '4px')};
	height: fit-content;
	width: fit-content;
	font-size: 0.775rem;
	padding: 0 11px;
`;
