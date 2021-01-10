export interface IScreenReturn {
	xs: boolean;
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	"2xl": boolean;
	"3xl": boolean;
}

export interface IWallet {
	id: string;
	amount: string;
	blockId: string;
	confirmations: number;
	fee: string;
	recipient: string;
	sender: string;
	senderPublicKey: string;
	timestamp: { human: string };
}

export interface ICustomSelectProps {
	selectedOption: string;
	screenWidth: number;
	setSelectedOption: (value: string) => void;
}

export interface IHeaderProps extends ICustomSelectProps {
	balance: string;
}

export interface ITableProps {
	screenWidth: number;
	token: string;
	setToken: (token: string) => void;
	data: IWallet[];
}

export interface IColumnProps {
	name: string;
	value: string | React.ReactNode;
	valueStyles: string;
	callback?: (e: React.MouseEvent) => void;
}

export interface IUseFetch {
	data: IWallet[];
	loading: boolean;
	error: string;
}

export interface ICustomSliderProps {
	isHover?: boolean | false;
	isFocus?: boolean | false;
	value: number;
	range: SliderRange;
	setValue: (value: string) => void;
}

export interface IInputFeeProps {
	onChange?: (value: string) => void;
	range?: SliderRange;
}

export interface IErrorProps {
	message: string;
}

export type SliderRange = {
	min: number;
	max: number;
};

export interface ISelectOptions {
	label: string;
	value: string;
}
