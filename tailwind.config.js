/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#F5F5F5" /* Fondo principal */,
				text: "#16161D" /* Texto principal */,
				secondarybg: "#E8E8E8" /* Fondo secundario */,
				secondarytext: "#333333" /* Texto secundario */,
				accent: "#007BFF" /* Color de acento (azul) */,
				border: "#D1D1D1" /* Bordes */,

				colorbg: "#16161D" /* Fondo principal */,
				colortext: "#F5F5F5" /* Texto principal */,
				colorsecondary: "#202024" /* Fondo secundario */,
				colorsecondarytext: "#BBBBBB" /* Texto secundario */,
				coloraccent: "#4BA3FF" /* Color de acento (azul claro) */,
				colorborder: "#3A3A3A" /* Bordes */,
			},
		},
	},
	plugins: [],
};
