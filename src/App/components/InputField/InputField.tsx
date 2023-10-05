/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Spinner } from '../Spinner/Spinner';
import { FormItem, Input, Label } from './InputField.styles';

interface IInputField extends React.HTMLAttributes<HTMLInputElement> {
	width?: string;
	value?: any;
	label?: string;
	type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'submit';
	loading?: boolean;
	onChange: (value: any) => void;
}

export const InputField = ({
	label,
	type,
	value,
	width,
	placeholder,
	loading,
	onChange,
	...rest
}: IInputField) => {
	const inputRef = useRef({
		value: value,
	}) as MutableRefObject<HTMLInputElement>;
	const [active, setActive] = useState<boolean>(false);
	const handleFocus = () => {
		setActive(true);
	};

	const handleBlur = () => {
		setActive(!!inputRef.current.value);
	};

	useEffect(() => {
		inputRef.current.value = value ?? '';
	}, [value]);

	return (
		<FormItem>
			<Label active={active} type={type ?? 'text'} htmlFor="teste-input">
				{label}
			</Label>
			<Input
				{...rest}
				ref={inputRef}
				name="teste-input"
				placeholder={label ? '' : placeholder}
				type={type ?? 'text'}
				width={width}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={() => onChange(inputRef.current?.value || '')}
			/>
			{type === 'search' && <BiSearch className="magnifier" />}
			{loading && <Spinner size="10px" className="loading" />}
		</FormItem>
	);
};
