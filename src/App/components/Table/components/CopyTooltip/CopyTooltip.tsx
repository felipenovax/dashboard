import { Container } from './CopyTooltip.styles';

type CopyTooltipProps = {
	animation?: string;
	position: { x: number; y: number };
	onChangeAnimation: (animation?: string) => void;
	onChangePosition: (position: { x: number; y: number }) => void;
};

export const CopyTooltip = ({
	animation,
	position,
	onChangeAnimation,
	onChangePosition,
}: CopyTooltipProps) => {
	const handleChangeAnimation = () => {
		onChangeAnimation(undefined);
		onChangePosition({ x: 0, y: 0 });
	};

	const hasPosition = position.x > 0 && position.y > 0;
	return (
		<>
			{hasPosition && (
				<Container
					animation={animation}
					position={position}
					onAnimationEnd={handleChangeAnimation}
				>
					Copied
				</Container>
			)}
		</>
	);
};
