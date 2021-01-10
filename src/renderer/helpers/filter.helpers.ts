import { IWallet } from "../interface";

export const getDataFilteredFee = (data: IWallet[], fee: string): IWallet[] => {
	if (!fee) return data;
	return data.filter((el) => Number(el.fee) >= Number(fee));
};
