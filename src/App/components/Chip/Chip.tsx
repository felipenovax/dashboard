import React from 'react';
import { Span } from './Chip.styles';

interface IChip extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	variant?: 'default' | 'primary' | 'secondary' | 'tertiary';
	type?: 'chip' | 'tag';
}

export const Chip = ({ children, variant, type }: IChip) => {
	return (
		<Span variant={variant ?? 'default'} type={type ?? 'tag'}>
			{children}
		</Span>
	);
};
