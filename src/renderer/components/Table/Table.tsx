import React from "react";

import { ITableProps } from "../../interface";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props: ITableProps): JSX.Element => (
	<div className="w-full px-8 pt-4 pb-12 lg:px-10 lg:pt-12">
		<div className="mx-auto max-w-xl block">
			<table className="border-collapse w-full table-auto">
				<TableHead />
				<TableBody {...props} />
			</table>
		</div>
	</div>
);
export default Table;
