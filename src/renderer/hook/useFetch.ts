import axios from "axios";
import { useEffect, useState } from "react";

import { IUseFetch, IWallet } from "../interface";
import { getWalletsAPI } from "../services";

const useFetch = (token: string): IUseFetch => {
	const [data, setData] = useState<IWallet[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get(getWalletsAPI(token), {
				headers: {
					"Content-Type": "application/json",
				},
				timeout: 5000,
			})
			.then((response) => {
				setData(response.data.data);
				setLoading(false);
			})
			.catch((ex) => {
				const err = axios.isCancel(ex)
					? "Request cancelled"
					: ex.code === "ECONNABORTED"
					? "A timeout has occurred"
					: ex.response.status === 404
					? "Resource not found"
					: "An unexpected error has occurred";
				setError(err);
				setLoading(false);
			});
	}, [token]);

	return {
		data,
		loading,
		error,
	};
};

export default useFetch;
