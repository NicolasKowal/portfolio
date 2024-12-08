"use client";
import React from "react";
import Tecnologias from "./components/Tecnologias";
import About from "./components/About";
import Links from "./components/Links";
import Contact from "./components/Contact";
export default function Home() {
	return (
		<div>
			<main>
				<section id="AcercaDe" className="bg-red-400 pt-20 pb-20">
					<About />
				</section>
				<section id="Tecnologias" className="bg-violet-400">
					<Tecnologias />
				</section>
				<section id="Web" className="bg-orange-300">
					<Links />
				</section>
				<section id="Contacto">
					<Contact />
				</section>
			</main>
		</div>
	);
}
