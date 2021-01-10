import React, {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

import { decimaCount, defaultSliderRange } from "../../helpers/constants";
import { searchValueParse } from "../../helpers/string.helpers";
import useFocus from "../../hook/useFocus";
import useHover from "../../hook/useHover";
import { IInputFeeProps } from "../../interface";
import CustomSlider from "../CustomSlider";

const InputFee = (props: IInputFeeProps): JSX.Element => {
	const { onChange, range } = props;
	const [searchValue, setSearchValue] = useState("");
	const hoverRef = useRef(null);
	const focusRef = useRef(null);
	const isHover = useHover(hoverRef);
	const isFocus = useFocus(focusRef);

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearchValue(searchValueParse(e.target.value));
		},
		[]
	);

	useEffect(() => {
		if (onChange) {
			const changeValue = (Number(searchValue) * decimaCount).toString();
			if (changeValue) {
				onChange(changeValue);
			}
		}
	}, [searchValue, onChange]);

	const handleFormSubmit = useCallback((e: FormEvent): void => {
		e.preventDefault();
		return;
	}, []);

	return (
		<form className="fee-form" ref={hoverRef} onSubmit={handleFormSubmit}>
			<label className="flex flex-col-reverse font-sb text-sm text-black-300 hover:text-green-300">
				<input
					role="textbox"
					ref={focusRef}
					value={searchValue}
					onChange={handleInputChange}
					type="text"
					name="fee"
					className="w-full outline-none flex justify-between items-center pl-5 py-4 rounded-4xl text-sm text-black-300 border border-gray-300 focus:border-green-300 fee-input"
					placeholder="Simple Text"
				/>
				<p className="pl-5 mb-1">Field name</p>
			</label>
			<div className="px-5" />
			<CustomSlider
				value={Number(searchValue)}
				setValue={setSearchValue}
				isHover={isHover}
				isFocus={isFocus}
				range={range ? range : defaultSliderRange}
			/>
		</form>
	);
};

export default InputFee;
