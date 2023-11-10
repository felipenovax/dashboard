import { Fragment, useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { Checkbox } from '../Checkbox/Checkbox';
import {
	Container,
	HeaderItem,
	Row,
	TableElement,
	TableHeader,
	Wrapper,
} from './Table.styles';
import { Footer } from './components/Footer/Footer';

type DefaultType = { [key: string]: any };
interface ITable {
	headers: { key: string; value: string; width: string }[];
	rows: DefaultType[];
}

type TableRowsProps = DefaultType[];

type SortProps = {
	slug: string;
	order: 'asc' | 'desc';
};

export const Table = ({ headers, rows }: ITable) => {
	const [sortedBy, setSortedBy] = useState<SortProps>({
		slug: '',
		order: 'desc',
	});
	const [tableRows, setTableRows] = useState<TableRowsProps>(rows);
	const [selectedRows, setSelectedRows] = useState<TableRowsProps>([]);

	const handleSelectRow = (row: DefaultType, state?: boolean) => {
		if (state) {
			setSelectedRows([...selectedRows, row]);
		} else {
			setSelectedRows(selectedRows.filter((item) => item !== row));
		}
	};

	const textContent = (elem: React.ReactElement | string): string => {
		if (!elem) {
			return '';
		}
		if (typeof elem === 'string') {
			return elem;
		}
		const children = elem.props && elem.props.children;
		if (children instanceof Array) {
			return children.map(textContent).join('');
		}
		return textContent(children);
	};
	const sortTable = (slug: string) => {
		const sortOperator = sortedBy.order === 'asc' ? 'desc' : 'asc';
		setSortedBy({
			slug,
			order: sortOperator,
		});
		const isObject = typeof tableRows[0][slug] === 'object';

		setTableRows([
			...tableRows.sort((a, b) => {
				const textA = isObject
					? textContent(a[slug]).toUpperCase()
					: a[slug].toUpperCase();
				const textB = isObject
					? textContent(b[slug]).toUpperCase()
					: b[slug].toUpperCase();

				const direction =
					sortOperator === 'asc' ? textA < textB : textA > textB;

				return direction ? -1 : textA > textB ? 1 : 0;
			}),
		]);
	};

	return (
		<Wrapper>
			<Container>
				<TableElement id="myTable">
					<thead>
						<tr>
							<TableHeader width="40px">
								<Checkbox
									checked={true}
									onChange={(state) => setSelectedRows(state ? rows : [])}
								/>
							</TableHeader>
							{headers.map((header) => (
								<TableHeader key={header.key} width={header.width}>
									<HeaderItem>
										<Fragment key={header.key}>{header.value}</Fragment>
										{sortedBy.order === 'asc' &&
										sortedBy.slug === header.key ? (
											<BiDownArrowAlt
												className={
													sortedBy.slug === header.key && 'sort-icon-active'
												}
												onClick={() => sortTable(header.key)}
											/>
										) : (
											<BiUpArrowAlt
												onClick={() => sortTable(header.key)}
												className={
													sortedBy.slug === header.key && 'sort-icon-active'
												}
											/>
										)}
									</HeaderItem>
								</TableHeader>
							))}
						</tr>
					</thead>
					{tableRows.map((row, index) => (
						<tbody key={index}>
							<Row>
								<td>
									<Checkbox
										checked={selectedRows.includes(row)}
										onChange={(state) => handleSelectRow(row, state)}
									/>
								</td>
								{headers.map((header) => (
									<td key={header.key}>{row[header.key]}</td>
								))}
							</Row>
						</tbody>
					))}
				</TableElement>
			</Container>
			<Footer />
		</Wrapper>
	);
};
