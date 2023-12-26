export type RowProps = { [key: string]: any };

export type HeaderProps = {
	key: string;
	value: string;
	width: string;
	sort?: boolean;
	hidden?: boolean;
	copy?: boolean;
	nested?: string;
	pin?: boolean;
};

export type ITable = {
	headers: HeaderProps[];
	rows: RowProps[];
};

export type TableHeaderProps = ITable & {
	onChangeRows?: (rows: RowProps[]) => void;
	onSelectRows?: (rows: RowProps[]) => void;
	selectedRows?: RowProps[];
};

export type SortProps = {
	slug: string;
	order: 'asc' | 'desc';
};

export type SortIconProps = {
	header: HeaderProps;
	rows: RowProps[];
	visible: boolean;
	onChangeRows: (rows: RowProps[]) => void;
};
