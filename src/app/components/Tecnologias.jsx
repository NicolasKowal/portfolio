import React from "react";
import "../styles/globals.css";
import MyAtropos from "../components/MyAtropos";

function Tecnologias() {
	let tamaño = 100;
	if (window.innerWidth <= 640) {
		tamaño = 100;
	} else if (window.innerWidth <= 768) {
		tamaño = 120;
	} else if (window.innerWidth <= 1024) {
		tamaño = 150;
	} else {
		tamaño = 200;
	}
	return (
		<div className="sm:h-[50vh] lg:h-[60vh] 2xl:h-[80vh] w-[100%]">
			<div className="sm:flex-wrap 2xl:h-[250px]  flex items-center justify-around w-[100%]">
				<MyAtropos url="/react.png" alt="react" tamaño={tamaño} />
				<MyAtropos url="/vite.svg" alt="vite" tamaño={tamaño} />
				<MyAtropos url="/next.png" alt="next" tamaño={tamaño} />
				<MyAtropos url="/vercel.png" alt="vercel" tamaño={tamaño} />
				<MyAtropos url="/zustand.png" alt="zustand" tamaño={tamaño} />
			</div>
			<div className="sm:h-[150px] 2xl:h-[250px]  flex items-center justify-around w-[100%]">
				<MyAtropos url="/sass.png" alt="sass" tamaño={tamaño} />
				<MyAtropos url="/tailwind.png" alt="tailwind" tamaño={tamaño} />
				<MyAtropos url="/bootstrap.png" alt="bootstrap" tamaño={tamaño} />
			</div>
			<div className="sm:h-[150px] 2xl:h-[250px]  flex items-center justify-around w-[100%]">
				<MyAtropos url="/firebase.png" alt="firebase" tamaño={tamaño} />
			</div>
		</div>
	);
}

export default Tecnologias;
