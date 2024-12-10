import React from "react";
import "../styles/globals.css";
import MyAtropos from "../components/MyAtropos";

function Tecnologias() {
	return (
		<div className="w-[100%] xs:flex-wrap flex flex-col justify-center">
			<div className="xs:grid xs:grid-cols-2 sm:flex items-center justify-around w-[75%] mx-auto">
				<MyAtropos url="/react.png" alt="react" />
				<MyAtropos url="/vite.svg" alt="vite" />
				<MyAtropos url="/next.png" alt="next" />
				<MyAtropos url="/vercel.png" alt="vercel" />
				<MyAtropos url="/zustand.png" alt="zustand" />
			</div>
			<div className="xs:grid xs:grid-cols-2 sm:flex items-center justify-around w-[75%] mx-auto">
				<MyAtropos url="/sass.png" alt="sass" />
				<MyAtropos url="/tailwind.png" alt="tailwind" />
				<MyAtropos url="/bootstrap.png" alt="bootstrap" />
			</div>
			<div className="xs:grid xs:grid-cols-2 sm:flex items-center justify-around w-[75%] mx-auto">
				<MyAtropos url="/firebase.png" alt="firebase" />
			</div>
		</div>
	);
}

export default Tecnologias;
