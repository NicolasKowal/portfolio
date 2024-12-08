"use client";
import React from "react";
import setMode from "../store/setMode";

function Footer() {
	const { count } = setMode();
	return (
		<footer
			className={
				!count
					? "flex items-center justify-center h-[7vh] text-text bg-color"
					: "flex items-center justify-center h-[7vh] text-colortext bg-colorbg"
			}
		>
			footer
		</footer>
	);
}

export default Footer;
