import React, { useMemo, useState } from "react";

import { getBalance, getSliderRange } from "../helpers/balance.helpers";
import { initDefaultToken } from "../helpers/constants";
import { getDataFilteredFee } from "../helpers/filter.helpers";
import useFetch from "../hook/useFetch";
import useResize from "../hook/useResize";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import InputFee from "./InputFee/InputFee";
import Loader from "./Loader";
import Table from "./Table/Table";

export const App = (): JSX.Element => {
	const [token, setToken] = useState(initDefaultToken);
	const [feeValue, setFeeValue] = useState("");
	const { data, loading, error } = useFetch(token);
	const screenWidth = useResize();

	const range = useMemo(() => getSliderRange(data), [data]);
	const balance = useMemo(() => getBalance(data), [data]);

	const filteredData = useMemo(() => getDataFilteredFee(data, feeValue), [
		data,
		feeValue,
	]);

	return (
		<div className="flex flex-col font-r font-main">
			<Header
				balance={balance}
				selectedOption={token}
				setSelectedOption={setToken}
				screenWidth={screenWidth}
			/>
			{loading && <Loader />}
			{error && <Error message={error} />}
			{!loading && !error && !!data.length && (
				<>
					<div className="w-full px-8 pt-4 lg:px-10">
						<div className="mx-auto max-w-xl block">
							<InputFee onChange={setFeeValue} range={range} />
						</div>
					</div>
					<Table
						token={token}
						setToken={setToken}
						screenWidth={screenWidth}
						data={filteredData}
					/>
				</>
			)}
			<Footer />
		</div>
	);
};
