import { useEffect, useState } from 'react';
import { Container } from './EmptyTable.styles';

export const EmptyTable = () => {
	const [tableWidth, setTableWidth] = useState<number>(0);
	useEffect(() => {
		const el: any = document.getElementById('table-element');
		setTableWidth(el?.getBoundingClientRect().width - 4 || 300);
	}, []);

	return <Container tableWidth={tableWidth} />;
};
