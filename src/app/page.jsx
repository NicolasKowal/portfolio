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
					className="min-h-[80vh] flex items-center justify-center"
				>
					<About />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section id="Tecnologias" className="mmin-h-[100vh]">
					<Titulo titulo={"tecnologías que uso"} />
					<Tecnologias />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section
					id="Web"
					className="min-h-[100vh] flex flex-col items-center justify-center"
				>
					<Titulo titulo={"mis páginas más recientes"} />
					<Links />
				</section>
				<hr className="border-t-2 bg-color4" />
				<section
					id="Contacto"
					className="min-h-[50vh] flex flex-col items-center justify-around"
				>
					<Titulo titulo={"contacto"} />
					<Contact />
				</section>
			</main>
		</div>
	);
}
