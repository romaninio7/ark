import React from "react";

import { ITableProps } from "../../interface";
import Row from "./Row";

const TableBody = (props: ITableProps): JSX.Element => {
	const { data, ...otherProps } = props;

	return (
		<tbody>
			{data.map((item) => {
				const { id } = item;
				return <Row key={id} {...item} {...otherProps} />;
			})}
		</tbody>
	);
};

export default TableBody;
