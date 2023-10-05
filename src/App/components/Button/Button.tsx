import React from 'react';
import { Container } from './Button.styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	variant?: 'primary' | 'default' | 'label' | 'link';
	size?: 'small' | 'medium' | 'large';
	loading?: boolean;
	onClick?: () => void;
}

export const Button = ({
	children,
	leftIcon,
	rightIcon,
	loading,
	variant,
	size,
	onClick,
	...rest
}: IButtonProps) => {
	return (
		<Container
			{...rest}
			size={size ?? 'medium'}
			loading={Boolean(loading)}
			variant={variant ?? 'default'}
			onClick={() => onClick && onClick()}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</Container>
	);
};
