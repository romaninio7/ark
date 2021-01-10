import { decimaCount } from "./constants";

export const strSplit = (str: string): string => {
	const separator = "...";
	const s = str.slice(0, 5);
	const e = str.slice(-6);
	return `${s}${separator}${e}`;
};

export const getDataString = (data: string): string => {
	const newDate = new Date(data);
	const year = newDate.getUTCFullYear();
	const day = newDate.getUTCDate();
	const month = newDate.getUTCMonth();
	return `${day}.${month}.${year}`;
};

export const getCommaNumberString = (str: string): string => {
	const newStr = (Number(str) / decimaCount).toString();
	if (!newStr.includes("."))
		return newStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " DARK";
	const endPoint = newStr.split(".")[1];
	const startPoint = newStr
		.split(".")[0]
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	return `${startPoint}.${endPoint} DARK`;
};

export const searchValueParse = (str: string): string => {
	const handleRound = (str: string): string => {
		if (!str.includes(".")) return str;
		const d = str.length - str.indexOf(".");
		if (d <= 8) return str;
		return Number(str).toFixed(8);
	};

	let newStr = str
		.trim()
		.replace(/\s+/g, "")
		.replace(/,/, ".")
		.replace(/[^\d.]/g, "")
		.replace(/\./, "x")
		.replace(/\./g, "")
		.replace(/x/, ".");

	if (newStr.indexOf(".") === 0) newStr = `0${newStr}`;
	newStr = handleRound(newStr);
	return newStr;
};
