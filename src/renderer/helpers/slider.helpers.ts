import { MouseEvent, RefObject } from "react";

export const calcClickedValue = (
	e: MouseEvent,
	ref: RefObject<HTMLDivElement>
): number => {
	const bar = ref.current;
	if (!bar) return 0;
	const clickPositionInPage = e.pageX;
	const sliderStart = bar.getBoundingClientRect().left + window.scrollX;
	const sliderWidth = bar.offsetWidth;
	const clickPositionInSlider = clickPositionInPage - sliderStart;
	const valuePerPixel = 100 / sliderWidth;
	let value = valuePerPixel * clickPositionInSlider;
	if (value <= 0) value = 0;
	if (value >= 100) value = 100;
	return Math.round(value);
};

export const getCustomValue = (value: number, max: number): number => {
	let customValue = value / (max / 100);
	if (customValue <= 0) customValue = 0;
	if (customValue >= 100) customValue = 100;
	return Math.round(customValue);
};
export const getCustomStep = (max: number): number => max / 100;
