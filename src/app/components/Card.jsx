import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Card({ titulo, src, imagen, valor }) {
	return (
		<div
			className={
				valor === -1
					? "card-h flex w-[485px] h-[250px] p-3 rounded-lg bg-red-400"
					: "card-h flex w-[485px] h-[250px] p-3 rounded-lg bg-green-400"
			}
		>
			<div className="w-[40%] ">
				<h3 className="flex text-center items-center justify-center h-[50%] text-[1.75em] uppercase">
					{titulo}
				</h3>
				<div
					className={
						valor === -1
							? "flex items-center justify-center pb-3 w-[100%]"
							: "hidden"
					}
				>
					NO TERMINADO
				</div>
				<Link
					className="btn h-[25%] aspect-square w-[50%] mx-auto flex items-center justify-center rounded-lg bg-red-200"
					target="_blank"
					href={src}
				>
					Ir al sitio
				</Link>
			</div>
			<div className="w-[60%] flex items-center justify-center">
				<Image
					className="w-[100%] h-[75%] mx-auto rounded-lg"
					height={100}
					width={200}
					src={imagen}
					alt={titulo}
				/>
			</div>
		</div>
	);
}

export default Card;
