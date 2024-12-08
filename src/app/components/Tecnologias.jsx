import React from "react";
import "../styles/globals.css";
import MyAtropos from "../components/MyAtropos";

function Tecnologias() {
	const tamaño = "125";
	return (
		<div className="flex items-center justify-around h-[200px] w-[100%] pl-5 pr-5">
			<MyAtropos url="/react.png" alt="react" tamaño={tamaño} />
			<MyAtropos url="/vite.svg" alt="vite" tamaño={tamaño} />
			<MyAtropos url="/next.png" alt="next" tamaño={tamaño} />
			<MyAtropos url="/vercel.png" alt="vercel" tamaño={tamaño} />
			<MyAtropos url="/sass.png" alt="sass" tamaño={tamaño} />
			<MyAtropos url="/tailwind.png" alt="tailwind" tamaño={tamaño} />
			<MyAtropos url="/bootstrap.png" alt="bootstrap" tamaño={tamaño} />
			<MyAtropos url="/firebase.png" alt="firebase" tamaño={tamaño} />
			<MyAtropos url="/zustand.png" alt="zustand" tamaño={tamaño} />
		</div>
	);
}

export default Tecnologias;
