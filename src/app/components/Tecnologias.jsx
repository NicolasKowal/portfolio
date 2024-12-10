import React from "react";
import "../styles/globals.css";
import MyAtropos from "../components/MyAtropos";

function Tecnologias() {
	return (
		<div className="w-[100%]">
			<div className="md-auto grid grid-cols-3 items-center justify-center">
				<MyAtropos url="/react.png" alt="react" />
				<MyAtropos url="/vite.svg" alt="vite" />
				<MyAtropos url="/next.png" alt="next" />
				<MyAtropos url="/vercel.png" alt="vercel" />
				<MyAtropos url="/zustand.png" alt="zustand" />
				<MyAtropos url="/sass.png" alt="sass" />
				<MyAtropos url="/tailwind.png" alt="tailwind" />
				<MyAtropos url="/bootstrap.png" alt="bootstrap" />

				<MyAtropos url="/firebase.png" alt="firebase" />
			</div>
		</div>
	);
}

export default Tecnologias;
