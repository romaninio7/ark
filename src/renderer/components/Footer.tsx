import React from "react";

const Footer = (): JSX.Element => (
	<div className="fixed left-0 bottom-0 w-full flex justify-center items-center bg-gray-300 text-black-100 py-1 text-base">
		<span className="pr-2 border-r-2 border-black-100 border-opacity-50">
			2020 <span>&copy;</span> ARK.io
		</span>
		<span className="pl-2">All right reserved</span>
	</div>
);

export default Footer;
