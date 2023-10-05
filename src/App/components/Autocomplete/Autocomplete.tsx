import { useEffect, useState } from 'react';
import { InputField } from '../InputField/InputField';
import { Spinner } from '../Spinner/Spinner';

export const Autocomplete = ({ label }: { label?: string }) => {
	const [searchString, setSearchString] = useState<string>('');
	const [focus, setFocus] = useState<boolean>(false);

	useEffect(() => {
		focus && searchString && console.log('fetching data', searchString);
	}, [focus]);

	return (
		<div>
			<InputField
				onChange={setSearchString}
				label={label}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div>
				<span>Autocomplete</span>
				<Spinner size="10px" />
			</div>
		</div>
	);
};
