import "../helpers/loading.css";

import React from "react";

const Loader = (): JSX.Element => (
	<div className="text-center text-black-400 mt-40">
		<div className="lds-hourglass" />
	</div>
);

export default Loader;
