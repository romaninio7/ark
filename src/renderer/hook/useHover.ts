import { RefObject, useCallback, useEffect, useState } from "react";

const useHover = (elementRef: RefObject<HTMLDivElement>) => {
	const [value, setValue] = useState<boolean>(false);

	const handleMouseOver = useCallback(() => setValue(true), []);
	const handleMouseOut = useCallback(() => setValue(false), []);

	useEffect(() => {
		const node = elementRef?.current;
		if (!node) return;
		node.addEventListener("mouseover", handleMouseOver);
		node.addEventListener("mouseout", handleMouseOut);
		return () => {
			node.removeEventListener("mouseover", handleMouseOver);
			node.removeEventListener("mouseout", handleMouseOut);
		};
	}, [elementRef, handleMouseOut, handleMouseOver]);

	return !!value;
};

export default useHover;
