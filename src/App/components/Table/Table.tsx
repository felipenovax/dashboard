import { Fragment, useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { Checkbox } from '../Checkbox/Checkbox';
import { HeaderItem, Row, TableElement, TableHeader } from './Table.styles';
import { Footer } from './components/Footer/Footer';

export const Table = ({
	headers,
	rows,
}: {
	headers: { key: string; value: string; width: string }[];
	rows: { [key: string]: any }[];
}) => {
	const [sortedBy, setSortedBy] = useState<{
		slug: string;
		order: 'asc' | 'desc';
	}>({
		slug: '',
		order: 'desc',
	});
	const [tableRows, setTableRows] = useState<{ [key: string]: any }[]>(rows);

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
		<div style={{ overflowX: 'hidden' }}>
			<div style={{ overflowX: 'auto' }}>
				<TableElement id="myTable">
					<thead>
						<tr>
							<>
								<TableHeader style={{ width: '40px' }}>
									<Checkbox />
								</TableHeader>
								{headers.map((header) => (
									<TableHeader key={header.key} style={{ width: header.width }}>
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
							</>
						</tr>
					</thead>
					{tableRows.map((row, index) => (
						<tbody key={index}>
							<Row>
								<>
									<td>
										<Checkbox />
									</td>
									{headers.map((header) => (
										<td key={header.key}>{row[header.key]}</td>
									))}
								</>
							</Row>
						</tbody>
					))}
				</TableElement>
			</div>
			<Footer />
		</div>
	);
};
