import React from "react";

import { IErrorProps } from "../interface";

const Error = (props: IErrorProps): JSX.Element => {
	const { message } = props;
	return <div className="text-center text-red">{message}</div>;
};

export default Error;
