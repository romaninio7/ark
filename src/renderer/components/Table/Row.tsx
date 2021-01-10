import React, { useCallback, useMemo } from "react";

import TxidIcon from "../../assets/icons/txid.svg";
import { getScreen } from "../../helpers/screen.helpers";
import {
	getCommaNumberString,
	getDataString,
	strSplit,
} from "../../helpers/string.helpers";
import { BodyStyles, customBodyDescStyle } from "../../helpers/table.helpers";
import { IColumnProps, IWallet } from "../../interface";
import Column from "./Column";

interface IRowProps extends IWallet {
	token: string;
	setToken: (token: string) => void;
	screenWidth: number;
}
const Row = (props: IRowProps) => {
	const {
		senderPublicKey,
		sender,
		recipient,
		amount,
		fee,
		timestamp: { human },
		token,
		setToken,
		screenWidth,
	} = props;
	const screen = useMemo(() => getScreen(screenWidth), [screenWidth]);
	const { spanDescStyle, linkStyle } = BodyStyles;

	const handleLinkClick = useCallback(
		(e: React.MouseEvent, id: string): void => {
			e.preventDefault();
			if (id === token) return;
			setToken(id);
		},
		[setToken, token]
	);

	const columns: IColumnProps[] = useMemo(
		() => [
			{
				name: "Txid",
				value:
					screen.lg || screen.xl ? (
						<img
							src={TxidIcon}
							alt="icon"
							className="w-6 h-6 svg-green"
						/>
					) : (
						strSplit(senderPublicKey)
					),
				valueStyles: `${spanDescStyle} ${customBodyDescStyle(
					0
				)} ${linkStyle}`,
			},
			{
				name: "Sender",
				value: screen.md ? sender : strSplit(sender),
				valueStyles: `
            ${spanDescStyle} ${customBodyDescStyle(1)} 
            ${sender !== token ? linkStyle : ""}
            `,
				callback: (e) => handleLinkClick(e, sender),
			},
			{
				name: "Recipient",
				value: screen.md ? recipient : strSplit(recipient),
				valueStyles: `
            ${spanDescStyle} ${customBodyDescStyle(2)} 
            ${recipient !== token ? linkStyle : ""}
            `,
				callback: (e) => handleLinkClick(e, recipient),
			},
			{
				name: "Timestamp",
				value: getDataString(human),
				valueStyles: `${spanDescStyle} ${customBodyDescStyle(3)}`,
			},
			{
				name: "Amount",
				value: getCommaNumberString(amount),
				valueStyles: `${spanDescStyle} ${customBodyDescStyle(4)}`,
			},
			{
				name: "Fee",
				value: getCommaNumberString(fee),
				valueStyles: `${spanDescStyle} ${customBodyDescStyle(5)}`,
			},
		],
		[
			amount,
			fee,
			human,
			recipient,
			sender,
			senderPublicKey,
			handleLinkClick,
			linkStyle,
			screen,
			spanDescStyle,
			token,
		]
	);

	return (
		<tr className="pt-8 pb-4 border-b-2 last:border-b-0 border-gray-400 flex flex-row flex-wrap lg:hover:bg-gray-100 lg:p-0 lg:border-b lg:table-row lg:flex-row lg:flex-no-wrap ">
			{columns.map((column, index) => (
				<Column key={column.name} {...column} index={index} />
			))}
		</tr>
	);
};

export default Row;
