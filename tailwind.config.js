/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "400px",
			},
			colors: {
				color1: "#212121",
				color2: "#98FF98",
				color3: "#FFA500",
				color4: "#F8F9FA",
			},
		},
	},
	plugins: [],
};
