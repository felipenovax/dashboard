import { Fragment, useEffect } from 'react';
import { BiPin } from 'react-icons/bi';
import { Checkbox } from '../../../Checkbox/Checkbox';
import { TableHeaderProps } from '../../Table.types';
import { SortIcon } from '../SortIcon/SortIcon';
import { Container, HeaderItem } from './TableHeader.styles';

export const TableHeader = ({
	headers,
	rows,
	selectedRows,
	onSelectRows,
	onChangeRows,
}: TableHeaderProps) => {
	const handleSelectAll = (state?: boolean) => {
		if (!onSelectRows) return;

		onSelectRows(state ? rows : []);
	};

	useEffect(() => {
		console.log(selectedRows);
	}, [selectedRows]);

	return (
		<thead>
			<tr>
				<Container width="40px">
					<Checkbox
						checked={rows.length === selectedRows?.length}
						onChange={handleSelectAll}
					/>
				</Container>
				<Fragment>
					{headers.map(
						(header) =>
							!header.hidden && (
								<Container
									key={header.key}
									width={header.width}
									className="table-header-container"
									pinned={header.pin}
								>
									<HeaderItem className="table-header-item">
										{/* <BiPin className="table-header-item--pin" /> */}
										<span className="table-header-item--label" key={header.key}>
											{header.value}
										</span>
										{header.pin && (
											<BiPin
												className="table-header-item--pin"
												onClick={() => console.log('click')}
											/>
										)}
										<SortIcon
											visible={header.sort !== false}
											header={header}
											rows={rows}
											onChangeRows={(change) =>
												onChangeRows && onChangeRows(change)
											}
										/>
									</HeaderItem>
								</Container>
							),
					)}
				</Fragment>
			</tr>
		</thead>
	);
};
