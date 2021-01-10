module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {},
		inset: {
			0: 0,
			"5px": "5px",
		},
		minWidth: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			"58px": "58px",
			full: "100%",
			"110%": "110%",
			"120%": "120%",
		},
		maxWidth: {
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			"max-w-screen-xl": "1200px",
		},
		minHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
			"6px": "6px",
			"58px": "58px",
		},
		maxHeight: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
			"2px": "2px",
			"6px": "6px",
		},
		borderRadius: {
			none: "0",
			"2xl": "1rem",
			"4xl": "2rem",
			10: "10rem",
			full: "100%",
		},
		fontFamily: {
			main: ["Inter", "sans-serif"],
		},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		fontWeight: {
			r: 400,
			sb: 600,
			b: 700,
			eb: 800,
		},
		screens: {
			xs: "0px",
			sm: { min: "375px" },
			md: { min: "640px" },
			lg: { min: "768px" },
			xl: { min: "1024px" },
			"2xl": { min: "1280px" },
			"3xl": { min: "1360" },
		},
		fill: {
			gold: "#fbc457",
		},
		colors: {
			white: "#ffffff",
			gray: {
				100: "#f0f4f3",
				200: "#eaedec",
				300: "#c7c9cd",
				400: "#b6bebe",
			},
			black: {
				100: "#5a5d60",
				200: "#2f3333",
				300: "#1f2121",
				400: "#0c0d0d",
			},
			green: {
				100: "#b1d3cf",
				200: "#65b7ae",
				300: "#029383",
				400: "#046e62",
			},
			red: "#c93a3a",
			gold: "#fbc457",
		},
	},
	variants: {
		extend: {
			borderWidth: ["last"],
			borderColor: ["last"],
			padding: ["last"],
			backgroundColor: ["group-focus", "focus-within"],
			textColor: ["group-focus", "focus-within"],
		},
	},
	plugins: [],
};
