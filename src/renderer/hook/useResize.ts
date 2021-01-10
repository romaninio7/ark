import { useEffect, useState } from "react";

const useResize = (): number => {
	const [screenWidth, setScreenWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return screenWidth;
};

export default useResize;
