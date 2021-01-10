import { RefObject, useCallback, useEffect, useState } from "react";

const useFocus = (elementRef: RefObject<HTMLDivElement>) => {
	const [value, setValue] = useState<boolean>(false);

	const handleFocusIn = useCallback(() => setValue(true), []);
	const handleFocusOut = useCallback(() => setValue(false), []);

	useEffect(() => {
		const node = elementRef?.current;
		useCallback;
		if (!node) return;
		node.addEventListener("focusin", handleFocusIn);
		node.addEventListener("focusout", handleFocusOut);
		return () => {
			node.removeEventListener("focusin", handleFocusIn);
			node.removeEventListener("focusout", handleFocusOut);
		};
	}, [elementRef, handleFocusIn, handleFocusOut]);

	return !!value;
};

export default useFocus;
