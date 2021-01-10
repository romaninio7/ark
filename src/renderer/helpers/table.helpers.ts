export const TableHeadOptions = [
	{ id: "header_0", label: "Txid" },
	{ id: "header_1", label: "Sender" },
	{ id: "header_2", label: "Recipient" },
	{ id: "header_3", label: "Timestamp" },
	{ id: "header_4", label: "Amount" },
	{ id: "header_5", label: "Fee" },
];

export const isHiddenHead = (num: number): string => {
	switch (num) {
		case 0:
		case 1:
		case 2:
			return "";
		case 3:
			return " lg:hidden 2xl:table-cell text-center";
		case 4:
			return " text-right";
		case 5:
			return " lg:hidden xl:table-cell text-right";
		default:
			return "";
	}
};

export const isHiddenBody = (num: number): string => {
	switch (num) {
		case 3:
			return " lg:hidden 2xl:table-cell";
		case 5:
			return " lg:hidden xl:table-cell";
		default:
			return "";
	}
};

export const customBodyDescStyle = (index: number): string => {
	switch (index) {
		case 0:
		case 1:
		case 2:
			return " text-left  lg:border-r";
		case 3:
			return " text-center lg:border-r";
		case 4:
			return " text-right xl:border-r";
		case 5:
			return " text-right";
		default:
			return "";
	}
};

export const BodyStyles = {
	tdStyle:
		"w-full lg:w-auto pb-3 flex justify-between lg:py-4 lg:table-cell relative lg:static",
	spanHeadStyle: "inline-block lg:hidden text-black-100",
	spanDescStyle: "inline-block lg:block lg:-mr-px lg:px-5 lg:border-gray-400",
	linkStyle:
		"font-sb text-green-300 cursor-pointer hover:text-green-400 hover:underline font-sb",
};
