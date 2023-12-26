import React, { useCallback, useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { SortIconProps, SortProps } from '../../Table.types';

export const SortIcon = ({
	visible,
	header,
	rows,
	onChangeRows,
}: SortIconProps) => {
	const [sortedBy, setSortedBy] = useState<SortProps>({
		slug: '',
		order: 'desc',
	});

	const isAscendant = sortedBy.order === 'asc' && sortedBy.slug === header.key;
	const iconActiveClass =
		sortedBy.slug === header.key ? 'sort-icon-active' : '';

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

	const sortTable = useCallback(
		(slug: string) => {
			const sortOperator = sortedBy.order === 'asc' ? 'desc' : 'asc';
			setSortedBy({
				slug,
				order: sortOperator,
			});
			const isObject = typeof rows[0][slug] === 'object';

			onChangeRows(
				[...rows].sort((a, b) => {
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
			);
		},
		[sortedBy, rows, onChangeRows],
	);

	if (!visible) {
		return null;
	}

	return isAscendant ? (
		<BiDownArrowAlt
			onClick={() => sortTable(header.key)}
			className={iconActiveClass}
		/>
	) : (
		<BiUpArrowAlt
			onClick={() => sortTable(header.key)}
			className={iconActiveClass}
		/>
	);
};
