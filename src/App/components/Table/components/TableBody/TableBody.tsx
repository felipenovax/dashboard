import { Fragment, useState } from 'react';
import { Checkbox } from '../../../Checkbox/Checkbox';
import { HeaderProps, RowProps, TableHeaderProps } from '../../Table.types';
import { CopyTooltip } from '../CopyTooltip/CopyTooltip';
import { EmptyTable } from '../EmptyTable/EmptyTable';
import { Row, Td } from './TableBody.styles';

export const TableBody = ({
	headers,
	rows,
	selectedRows,
	onSelectRows,
}: TableHeaderProps) => {
	const [animation, setAnimation] = useState<string | undefined>(undefined);
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	const getTableContent = (header: HeaderProps, row: RowProps) => {
		if (header.nested) {
			const parents = header.nested.split('.');
			let content = row;

			for (const parent of parents) {
				if (content && content.hasOwnProperty(parent)) {
					content = content[parent];
				} else {
					return '-';
				}
			}

			return !content ? '-' : content[header.key] || '-';
		}

		return row[header.key] || '-';
	};

	const handleSelectRow = (row: RowProps) => {
		if (!onSelectRows || !selectedRows) return;

		const hasRow = selectedRows.find((item) => item.id === row.id);

		hasRow
			? onSelectRows(selectedRows.filter((item) => item.id !== row.id))
			: onSelectRows([...selectedRows, row]);
	};

	const handleClick = (e: any, header: any, row: RowProps) => {
		e.target.value = row[header.key];
		navigator.clipboard.writeText(e.target.value);
		setPosition({ x: e.clientX, y: e.clientY });
		setAnimation('fadeOut');
	};

	if (!rows.length) return <EmptyTable />;

	return (
		<Fragment>
			<CopyTooltip
				position={position}
				animation={animation}
				onChangeAnimation={setAnimation}
				onChangePosition={setPosition}
			/>
			{rows.map((row, index) => (
				<tbody key={index}>
					<Row className={selectedRows?.includes(row) ? 'active' : ''}>
						<Td>
							<Checkbox
								checked={selectedRows?.includes(row)}
								onChange={() => handleSelectRow(row)}
							/>
						</Td>
						{headers.map(
							(header) =>
								!header.hidden && (
									<Td
										key={header.key}
										pointer={header.copy}
										pinned={header.pin}
										onClick={(e: any) =>
											header.copy && handleClick(e, header, row)
										}
									>
										{getTableContent(header, row)}
									</Td>
								),
						)}
					</Row>
				</tbody>
			))}
		</Fragment>
	);
};
