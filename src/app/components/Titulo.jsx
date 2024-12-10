import React from "react";

function Titulo({ titulo }) {
	return (
		<h2 className="pt-10 pb-10 underline w-[100%] flex items-center justify-center xs:text-[1.1em] sm:text-[2em] capitalize text-color4">
			{titulo}
		</h2>
	);
}

export default Titulo;
