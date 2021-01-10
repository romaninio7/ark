import React from "react";

import { isHiddenHead, TableHeadOptions } from "../../helpers/table.helpers";

const TableHead = (): JSX.Element => (
	<thead>
		<tr>
			{TableHeadOptions.map((head, i) => (
				<th
					className={`py-4 px-5 text-left text-tiny text-gray-400 border border-gray-400 hidden lg:table-cell ${isHiddenHead(
						i
					)}`}
					key={head.id}
				>
					{head.label}
				</th>
			))}
		</tr>
	</thead>
);

export default TableHead;
