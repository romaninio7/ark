import React from "react";

import IconBalance from "../assets/icons/balance.svg";
import IconLogo from "../assets/logo.svg";
import { getCommaNumberString } from "../helpers/string.helpers";
import { IHeaderProps } from "../interface";
import CustomSelect from "./CustomSelect";

const Header = (props: IHeaderProps): JSX.Element => {
	const { balance, selectedOption, screenWidth, setSelectedOption } = props;

	return (
		<div className="py-12 px-8 lg:px-10 bg-green-300">
			<div className="my-0 mx-auto max-w-xl block">
				<div className="py-8 px-8 md:py-10 lg:px-10 xl:py-8 bg-black-400 rounded-2xl flex flex-col xl:flex-row xl:justify-between">
					{/*LOGO*/}
					<div className="flex items-center border-black-300 border-opacity-10 pb-8 xl:pb-0 border-b-2 xl:border-b-0">
						<img
							src={IconLogo}
							alt="logo"
							className="w-10 h-10 md:w-12 md:h-12"
						/>
						<span className="text-white pr-8 pl-4 font-eb text-2xl xl:hidden 2xl:block">
							ARK Wallet
						</span>
					</div>

					{/*DROPDOWN*/}
					<div className="text-white border-black-300 border-opacity-10 w-full pt-8 xl:pt-0 xl:pl-8 xl:border-l-2 xl:w-2/5 2xl:pl-10">
						<CustomSelect
							selectedOption={selectedOption}
							screenWidth={screenWidth}
							setSelectedOption={setSelectedOption}
						/>
					</div>

					{/*BALANCE*/}
					<div className="flex flex border-black-300 border-opacity-10 pt-6 xl:pt-0 xl:pl-8 xl:border-l-2 2xl:pl-10">
						<div
							className="justify-center items-center text-white mr-3 w-12 h-12 rounded-full border-2 border-black-200 xl:min-h-58px xl:min-w-58px
                            xs:hidden
                            md:flex
                        "
						>
							<img
								src={IconBalance}
								alt="balance"
								className="fill-current w-5 h-5 fill-gold "
							/>
						</div>
						<div>
							<p className="text-gray-400 font-sb">Balance</p>
							<p className="text-white font-b">
								{getCommaNumberString(balance)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
