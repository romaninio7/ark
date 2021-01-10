const perPage = 1;
const limitPerPage = 15;

export const getWalletsAPI = (token: string): string =>
	`https://dwallets.ark.io/api/wallets/${token}/transactions?page=${perPage}&limit=${limitPerPage}`;
