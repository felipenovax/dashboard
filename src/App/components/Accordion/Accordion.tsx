import { useState } from 'react';
import { Article } from './Accordion.styles';
import { AccordionItem } from './components/AccordionItem/AccordionItem';

const faqs = [
	{
		id: 1,
		header: 'Expandable #1',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
	},
	{
		id: 2,
		header: 'Expandable #2',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
	},
	{
		id: 3,
		header: 'Expandable #3',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
	},
	{
		id: 4,
		header: 'Expandable #4',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
	},
];

export const Accordion = () => {
	const [active, setActive] = useState(null);

	const handleToggle = (index: any) => {
		if (active === index) {
			setActive(null);
		} else {
			setActive(index);
		}
	};

	return (
		<Article>
			{faqs.map((faq, index) => {
				return (
					<AccordionItem
						key={index}
						active={active}
						handleToggle={handleToggle}
						faq={faq}
					/>
				);
			})}
		</Article>
	);
};
