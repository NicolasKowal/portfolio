import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Navbar() {
	return (
		<div className=" nav bg-color2 z-50 h-[10vh] flex items-center justify-between w-[100%] mx-auto top-0 sticky">
			<p className="xs:hidden lg:flex lg:text-[2em] h-[100%] w-[10%] flex items-center justify-center hover:text-color4">
				NK
			</p>
			<ul className="sm:text-[.75em] sm:w-[100%] xs:text-[.8em] xs:w-[100%] md:text-[.9em] lg:text-[1em] h-[100%] lg:w-[75%] 2xl:text-[1.1em] font-bold flex items-center justify-around">
				<li>
					<Link
						className="text-[1.1em] hover:underline hover:text-color4"
						href={"#AcercaDe"}
					>
						{"<Acerca-de-mí/>"}
					</Link>
				</li>
				<li>
					<Link
						className="text-[1.1em] hover:underline hover:text-color4"
						href={"#Tecnologias"}
					>
						{"<Tecnologías/>"}
					</Link>
				</li>
				<li>
					<Link
						className="text-[1.1em] hover:underline hover:text-color4"
						href={"#Web"}
					>
						{"<Webs/>"}
					</Link>
				</li>
				<li>
					<Link
						className="text-[1.1em] hover:underline hover:text-color4"
						href={"#Contacto"}
					>
						{"<Contacto/>"}
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
