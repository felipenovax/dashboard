import { useEffect, useRef, useState } from 'react';
import { AmountChip, Header, Tab } from './Tabs.styles';

interface ITabProps {
	options: {
		label: any;
		id: any;
		amount?: number;
	}[];
}

type PositionProps = {
	x: string;
	width: string;
};

export const Tabs = ({ options }: ITabProps) => {
	const [position, setPosition] = useState<PositionProps>({
		x: '0px',
		width: '0px',
	});
	const tabRef = useRef<HTMLDivElement | null>(null);
	const [activeTab, setActiveTab] = useState<number>(0);

	useEffect(() => {
		if (tabRef.current) {
			const { x, width } = tabRef.current.getBoundingClientRect();

			setPosition({
				x: `${x - 67}px`,
				width: `${width}px`,
			});
		}
	}, [activeTab]);

	return (
		<Header {...position}>
			{options.map((option, index) => (
				<Tab
					key={option.id}
					ref={activeTab === index ? tabRef : null}
					active={activeTab === index}
					onClick={() => setActiveTab(index)}
				>
					<div>
						{option.label}{' '}
						{option.amount && <AmountChip>{option.amount}</AmountChip>}
					</div>
				</Tab>
			))}
		</Header>
	);
};
