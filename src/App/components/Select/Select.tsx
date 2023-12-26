import { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { Container, Content, Wrapper } from './Select.styles';

const options_arr = ['batata', 'cenoura', 'abobrinha de goiás', 'abacate'];

export const Select = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [inputSearch, setInputSearch] = useState<string>('');
	const [isOpen, setOpen] = useState<boolean>(false);
	const [options, setOptions] = useState<string[]>(options_arr);

	const handleToggleSelect = () => {
		setOpen(!isOpen);
	};

	useEffect(() => {
		setOptions(
			options_arr.filter((item) =>
				item.toLowerCase().includes(inputSearch.toLowerCase()),
			),
		);
	}, [inputSearch]);

	useEffect(() => {
		if (!isOpen) {
			setInputSearch('');
		}
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		console.log('entrei');
		if (contentRef.current) {
			const { left, width, top, height } =
				contentRef.current.getBoundingClientRect();

			const windowHeight = window.innerHeight;
			console.log(top, height, windowHeight);
			contentRef.current.style.top =
				top + height > windowHeight ? `-${height + 1}px` : ``;

			const windowWidth = window.innerWidth;
			contentRef.current.style.left =
				left + width > windowWidth ? 'unset' : '1px';
		}
	}, [isOpen, options]);

	return (
		<Container ref={containerRef}>
			<Button rightIcon={<BiChevronDown />} onClick={handleToggleSelect}>
				Filters
			</Button>
			{
				<Wrapper open={isOpen} ref={contentRef}>
					{isOpen && (
						<Content open={isOpen}>
							<InputField
								placeholder="Buscar"
								type="search"
								onChange={(value) => setInputSearch(value)}
								value={inputSearch}
							/>
							{options.map((item) => (
								<span key={item} className="select-item">
									{item}
								</span>
							))}
						</Content>
					)}
				</Wrapper>
			}
		</Container>
	);
};
