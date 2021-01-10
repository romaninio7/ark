import { IWallet, SliderRange } from "../interface";
import { decimaCount, defaultSliderRange } from "./constants";

export const getBalance = (data: IWallet[]): string => {
	if (!data || !data.length) return "";
	const total = data.reduce((acc, el): number => {
		acc = acc + Number(el.amount);
		return acc;
	}, 0);
	return total.toString();
};

export const getSliderRange = (data: IWallet[]): SliderRange => {
	const min = defaultSliderRange.min;
	let max: number;
	if (!data || !data.length) {
		max = defaultSliderRange.max;
	} else {
		max =
			data.reduce((acc, el): number => {
				Number(el.fee) > acc ? (acc = Number(el.fee)) : null;
				return acc;
			}, 0) / decimaCount;
	}
	return {
		min,
		max,
	};
};
