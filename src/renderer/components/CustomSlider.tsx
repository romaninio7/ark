import React, { ChangeEvent, useCallback, useMemo } from "react";

import { getCustomStep, getCustomValue } from "../helpers/slider.helpers";
import { ICustomSliderProps } from "../interface";

const color = {
	green: "#029383",
	gold: "#fbc457",
};

const CustomSlider = (props: ICustomSliderProps): JSX.Element => {
	const { value, setValue, range, isHover, isFocus } = props;

	const customValue = useMemo(() => getCustomValue(value, range.max), [
		range,
		value,
	]);
	const customStep = useMemo(() => getCustomStep(range.max), [range]);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>): void => {
			setValue(e.target.value.toString());
		},
		[setValue]
	);

	return (
		<div className="py-1 w-full flex cursor-pointer">
			<div className="mx-5 py-4 w-full relative">
				<input
					role="slider"
					value={value}
					onChange={handleChange}
					onInput={handleChange}
					type="range"
					min={range.min}
					max={range.max}
					step={customStep}
					className="w-full h-6 absolute top-1/2 left-0 top-5px z-50 cursor-pointer opacity-0"
				/>
				<div
					className="w-full h-05 items-center flex flex-1 cursor-pointer absolute top-1/2 left-0 z-40"
					style={{
						background: `linear-gradient(to right, ${
							isHover || isFocus ? color.gold : color.green
						} ${customValue}%, #c7c9cd 0)`,
					}}
				>
					<span
						className={`
                    transition-all duration-0 ease w-2 h-4 bg-white 
                    relative block rounded-10 border-2
                    ${isHover || isFocus ? "border-gold" : "border-green-300"}
                `}
						style={{ left: `${customValue}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomSlider;
