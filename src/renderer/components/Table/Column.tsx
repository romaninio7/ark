import React from "react";

import { BodyStyles, isHiddenBody } from "../../helpers/table.helpers";
import { IColumnProps } from "../../interface";

interface IColumnComponentProps extends IColumnProps {
	index: number;
}
const Column = (props: IColumnComponentProps) => {
	const { name, index, value, valueStyles, callback } = props;
	const { tdStyle, spanHeadStyle } = BodyStyles;
	return (
		<td className={`${tdStyle} ${isHiddenBody(index)}`}>
			<span className={spanHeadStyle}>{name}</span>
			<span
				className={valueStyles}
				onClick={(e) => {
					if (callback) {
						callback(e);
					}
				}}
			>
				{value}
			</span>
		</td>
	);
};

export default Column;
