import { Step, Wrapper } from './Stepper.styles';

interface IStepper {
	steps: any[];
	active: number;
	onChange: (index: number) => void;
}

export const Stepper = ({ active, steps, onChange }: IStepper) => {
	return (
		<Wrapper>
			{steps.map((step: any, index: number) => (
				<Step
					key={index}
					active={index < active}
					complete={index <= active}
					last={index + 1 === steps.length}
					onClick={() => onChange(index)}
				>
					{step.label}
				</Step>
			))}
		</Wrapper>
	);
};
