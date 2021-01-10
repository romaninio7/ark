import { IScreenReturn } from "../interface";

export const getScreen = (screenWidth: number): IScreenReturn => {
	const screen: IScreenReturn = {
		xs: 0 <= screenWidth && screenWidth < 375,
		sm: 375 <= screenWidth && screenWidth < 640,
		md: 640 <= screenWidth && screenWidth < 768,
		lg: 768 <= screenWidth && screenWidth < 1024,
		xl: 1024 <= screenWidth && screenWidth < 1280,
		"2xl": 1024 <= screenWidth && screenWidth < 1280,
		"3xl": 1024 <= screenWidth && screenWidth < 1280,
	};
	return screen;
};
