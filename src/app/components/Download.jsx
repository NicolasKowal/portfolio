import React from "react";
import { MdOutlineCloudDownload } from "react-icons/md";

function Download() {
	return (
		<a
			className="card-h flex items-center justify-center p-1 gap-3 bg-color4 text-color1 h-[50%] w-[50%] rounded text-[1.25em]"
			download
			href={"/Nicolas-Kowalkiewicz.pdf"}
		>
			<div>
				<MdOutlineCloudDownload />
			</div>
			<div>Descargar CV</div>
		</a>
	);
}

export default Download;
