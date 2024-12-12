"use client";
import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Navbar() {
	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};
	return (
		<div className="  bg-color2 z-50 h-[10vh] flex items-center justify-between w-[100%] mx-auto top-0 sticky">
			<p className="xs:hidden lg:flex lg:text-[2em] h-[100%] w-[10%] flex items-center justify-center hover:text-color4">
				NK
			</p>
			<ul className="sm:text-[.75em] sm:w-[100%] xs:text-[.8em] xs:w-[100%] md:text-[.9em] lg:text-[1em] h-[100%] lg:w-[75%] 2xl:text-[1.1em] font-bold flex items-center justify-around">
				<li>
					<button
						onClick={() => {
							handleScroll("AcercaDe");
						}}
						className="text-[1.1em] hover:underline hover:text-color4"
					>
						{"<Acerca-de-mí/>"}
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleScroll("Tecnologias");
						}}
						className="text-[1.1em] hover:underline hover:text-color4"
					>
						{"<Tecnologías/>"}
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleScroll("Web");
						}}
						className="text-[1.1em] hover:underline hover:text-color4"
					>
						{"<Webs/>"}
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleScroll("Contacto");
						}}
						className="text-[1.1em] hover:underline hover:text-color4"
					>
						{"<Contacto/>"}
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
