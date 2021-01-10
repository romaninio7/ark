import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import InputFee from "./InputFee";

test("should update input when editing slide", () => {
	render(<InputFee />);

	fireEvent.change(screen.getByRole("slider"), {
		target: {
			value: "0.05678912",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("0.05678912");
});

it("should update slide when editing input", () => {
	render(<InputFee />);

	fireEvent.change(screen.getByRole("textbox"), {
		target: {
			value: "0.05678912",
		},
	});

	expect(screen.getByRole("slider")).toHaveValue("0.05678912");
});

test("should emit value in satoshi on input change", () => {
	const onChange = jest.fn();

	render(<InputFee onChange={onChange} />);

	fireEvent.change(screen.getByRole("textbox"), {
		target: {
			value: "0.123",
		},
	});

	expect(onChange).toHaveBeenCalledWith("12300000");
});

test("should not show scientific notation", () => {
	render(<InputFee />);

	fireEvent.change(screen.getByRole("slider"), {
		target: {
			value: "0.000000001",
		},
	});

	expect(screen.getByRole("textbox")).not.toHaveValue("1e-8");
});

test("should not allow non-numeric characters", () => {
	render(<InputFee />);

	fireEvent.input(screen.getByRole("textbox"), {
		target: {
			value: "abc012@#9",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("0129");
});

test("should not allow more than 8 decimals", () => {
	render(<InputFee />);

	fireEvent.input(screen.getByRole("textbox"), {
		target: {
			value: "0.0000000123",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("0.00000001");

	fireEvent.input(screen.getByRole("textbox"), {
		target: {
			value: "12345678.12",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("12345678.12");
});

test("should not allow more than 1 separator", () => {
	render(<InputFee />);

	fireEvent.input(screen.getByRole("textbox"), {
		target: {
			value: "1.234.56",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("1.23456");
});

test("should use comma as separator", () => {
	render(<InputFee />);

	fireEvent.input(screen.getByRole("textbox"), {
		target: {
			value: "1,234.56",
		},
	});

	expect(screen.getByRole("textbox")).toHaveValue("1.23456");
});
