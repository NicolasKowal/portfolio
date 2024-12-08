"use client";
import React from "react";
import Atropos from "atropos/react";
import Image from "next/image";
import "atropos/css";

function MyAtropos({ url, alt, tamaño }) {
	return (
		<Atropos
			style={{ width: tamaño, height: tamaño }}
			activeOffset={100}
			shadowScale={0}
		>
			<Image alt={alt} height={tamaño} width={tamaño} src={url} />
		</Atropos>
	);
}

export default MyAtropos;
