import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Navbar() {
	return (
		<div className="z-50 h-[8vh] flex items-center justify-between w-[100%] mx-auto top-0 sticky bg-green-500">
			<p className="sm:text-[1.5em] md:text-[2em] h-[100%] w-[10%] flex items-center justify-center bg-red-200 text-[3em]">
				NK
			</p>
			<ul className="sm:text-[.6em] md:text-[.75em] h-[100%] w-[50%] font-bold flex items-center justify-around  bg-orange-200">
				<li>
					<Link className="text-[1.1em] hover:underline" href={"#AcercaDe"}>
						{"<Acerca-de-mi/>"}
					</Link>
				</li>
				<li>
					<Link className="text-[1.1em] hover:underline" href={"#Tecnologias"}>
						{"<Tecnologias/>"}
					</Link>
				</li>
				<li>
					<Link className="text-[1.1em] hover:underline" href={"#Web"}>
						{"<Webs/>"}
					</Link>
				</li>
				<li>
					<Link className="text-[1.1em] hover:underline" href={"#Contacto"}>
						{"<Contacto/>"}
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
