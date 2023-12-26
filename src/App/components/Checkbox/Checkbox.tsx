import React from 'react';
import { CheckboxForm, ContainerCheckbox } from './Checkbox.styles';

interface ICheckbox {
	checked?: boolean;
	size?: 'small' | 'medium' | 'large';
	onChange: (checked?: boolean) => void;
}

export const Checkbox = ({ checked, size, onChange }: ICheckbox) => {
	const checkboxRef = React.useRef<HTMLInputElement>({
		checked: checked,
	} as HTMLInputElement);

	return (
		<CheckboxForm>
			<ContainerCheckbox
				size={size ?? 'medium'}
				ref={checkboxRef}
				type="checkbox"
				name="checkbox"
				onChange={(e: React.BaseSyntheticEvent) => onChange(e.target.checked)}
			/>
		</CheckboxForm>
	);
};
