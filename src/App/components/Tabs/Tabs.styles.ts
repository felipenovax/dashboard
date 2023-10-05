import styled from 'styled-components';

type TabProps = {
	active?: boolean;
};

type HeaderProps = {
	width: string;
	x: string;
};

export const Header = styled.header<HeaderProps>`
	width: 100%;
	border-bottom: 1px solid #e5e6e5;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		bottom: -0.2rem;
		left: ${({ x }) => (x ? x : '1rem')};
		width: ${({ width }) => (width ? width : '0')};
		height: 2px;
		background: var(--primary);
		transition: all 0.3s ease-in-out;
	}
`;

export const Tab = styled.div<TabProps>`
	position: relative;
	padding: 0 1rem;
	font-weight: 600;
	font-size: 0.875rem;
	color: ${({ active }) => (active ? 'var(--primary)' : 'inherit')};

	&:after {
		content: '';
		position: absolute;
		bottom: -0.7rem;
		left: 0;
		width: 100%;
		height: 2px;
		/* background: var(--primary); */
		transition: all 0.3s;
		animation: ${({ active }) =>
			active
				? 'width-enter 0.3s ease-in-out forwards '
				: 'width-exit 0.3s ease-in-out backwards'};
	}

	/* @keyframes width-enter {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}

	@keyframes width-exit {
		0% {
			width: 100%;
		}
		100% {
			width: 0;
		}
	} */
`;

export const AmountChip = styled.span`
	display: inline-block;
	padding: 0.125rem 0.25rem;
	border-radius: 4px;
	background: #e5e6e5;
	font-size: 0.675rem;
	font-weight: 600;
	color: #494964;
`;
