"use client";
import React from "react";
import Tecnologias from "./components/Tecnologias";
import About from "./components/About";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Titulo from "./components/Titulo";
export default function Home() {
	return (
		<div>
			<main>
				<section
					id="AcercaDe"
					className="lg:h-[80vh] flex flex-col items-center justify-center"
				>
					<About />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section
					id="Tecnologias"
					className="flex flex-col items-center justify-center"
				>
					<Titulo titulo={"tecnologías que uso"} />
					<Tecnologias />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section
					id="Web"
					className="lg:min-h-[100vh] flex flex-col items-center justify-center"
				>
					<Titulo titulo={"mis páginas más recientes"} />
					<Links />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section
					id="Contacto"
					className="lg:min-h-[50vh] flex flex-col items-center justify-center"
				>
					<Titulo titulo={"contacto"} />
					<Contact />
				</section>
			</main>
		</div>
	);
}
