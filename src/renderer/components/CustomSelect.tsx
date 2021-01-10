import React, { useCallback, useRef, useState } from "react";

import AddressGoldIcon from "../assets/icons/address_gold.svg";
import AddressIcon from "../assets/icons/address.svg";
import ArrowIcon from "../assets/icons/arrow-up.svg";
import { selectOptions } from "../helpers/options";
import { getScreen } from "../helpers/screen.helpers";
import { strSplit } from "../helpers/string.helpers";
import useOutsideClick from "../hook/useOutsideClick";
import { ICustomSelectProps } from "../interface";

const CustomSelect = (props: ICustomSelectProps): JSX.Element => {
	const ref = useRef(null);
	const { selectedOption, setSelectedOption, screenWidth } = props;
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const screen = getScreen(screenWidth);

	const handleOpenMenu = useCallback(() => setIsOpenMenu(true), []);
	const handleCloseMenu = useCallback(() => setIsOpenMenu(false), []);

	const handleHeaderClick = useCallback(() => {
		isOpenMenu ? handleCloseMenu() : handleOpenMenu();
	}, [handleCloseMenu, handleOpenMenu, isOpenMenu]);

	const handleClick = useCallback(
		(token: string): void => {
			setSelectedOption(token);
			handleCloseMenu();
		},
		[setSelectedOption, handleCloseMenu]
	);

	useOutsideClick(ref, handleCloseMenu);

	return (
		<div
			ref={ref}
			className="w-full relative xl:min-w-120% 2xl:min-w-110% 3xl:min-w-120%"
		>
			{/*HEAD*/}
			<div
				onClick={handleHeaderClick}
				className={`
                 cursor-pointer flex justify-between items-center pr-5 rounded-4xl text-left border-2 
                 ${isOpenMenu ? "border-green-300" : "border-black-200"}
                 `}
			>
				<div className="inline-flex">
					<span
						className={`
                        xs:hidden sm:hidden md:flex w-12 h-12 rounded-l-4xl flex justify-center items-center min-h-58px
                        ${isOpenMenu ? "bg-green-300" : "bg-black-200"}
                        `}
					>
						<img
							src={isOpenMenu ? AddressIcon : AddressGoldIcon}
							alt="address"
							className="w-5 h-5"
						/>
					</span>
					<p className="inline-block pl-5 py-4 text-white">
						{screen.xs || screen.sm || screen.xl
							? strSplit(selectedOption)
							: selectedOption}
					</p>
				</div>
				<span
					className={`
                    ${isOpenMenu ? "transform rotate-180" : ""}
                    w-4 h-4
                    `}
				>
					<img
						src={ArrowIcon}
						alt="arrow"
						className="w-full h-full"
					/>
				</span>
			</div>

			{/*DROPDOWN*/}
			{isOpenMenu && (
				<ul className="rounded-2xl bg-black-200 py-4 w-full absolute z-50 top-16 mt-1">
					{selectOptions.map((el) => (
						<li
							key={el.value}
							className={`
                            cursor-pointer py-4 hover:bg-black-100
                            ${selectedOption === el.value ? "bg-green-400" : ""}
                            `}
							onClick={() => handleClick(el.value)}
						>
							<p className="px-5">
								{screen.xs || screen.sm || screen.xl
									? strSplit(el.value)
									: el.value}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CustomSelect;
