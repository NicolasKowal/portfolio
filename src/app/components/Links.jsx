import React from "react";
import Card from "./Card";

function Links() {
	return (
		<div className="mx-auto p-10 w-[80%] grid grid-cols-2 gap-x-10 gap-y-20 justify-items-center bg-slate-800">
			<Card
				target="_blank"
				titulo="refugio austral"
				src="https://refugio-petshop.vercel.app/"
				imagen="/webs/petshop.png"
			/>
			<Card
				titulo="To Do List"
				src="https://nicolaskowal.github.io/ToDoList"
				imagen="/webs/todolist.png"
			/>
			<Card
				target="_blank"
				titulo="empanadas ya!"
				src="https://nicolaskowal.github.io/EmpanadasYa/"
				imagen="/webs/empanadas.png"
			/>
			<Card
				target="_blank"
				titulo="Panaderia"
				src="https://nicolaskowal.github.io/Paisano-de-hurlingham/index.html"
				imagen="/webs/paisano.png"
			/>

			<Card
				target="_blank"
				titulo="reservas hotel"
				src="https://nicolaskowal.github.io/ReservasHotel/"
				imagen="/webs/hotel.png"
				valor={-1}
			/>
		</div>
	);
}

export default Links;
