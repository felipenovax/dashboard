import { useEffect, useState } from 'react';
import { Container, TableElement, Wrapper } from './Table.styles';
import { ITable, RowProps } from './Table.types';
import { Footer } from './components/Footer/Footer';
import { TableBody } from './components/TableBody/TableBody';
import { TableHeader } from './components/TableHeader/TableHeader';

export const Table = ({ headers, rows }: ITable) => {
	const [tableRows, setTableRows] = useState<RowProps[]>(rows);
	const [selectedRows, setSelectedRows] = useState<RowProps[]>([]);

	useEffect(() => {
		console.log(selectedRows);
	}, [selectedRows]);

	return (
		<Wrapper className="table-wrapper">
			<Container className="table-container">
				<TableElement className="table-element" id="table-element">
					<TableHeader
						headers={headers}
						rows={tableRows}
						onChangeRows={setTableRows}
						onSelectRows={setSelectedRows}
					/>
					<TableBody
						headers={headers}
						rows={tableRows}
						onSelectRows={setSelectedRows}
						selectedRows={selectedRows}
					/>
				</TableElement>
			</Container>
			<Footer />
		</Wrapper>
	);
};
