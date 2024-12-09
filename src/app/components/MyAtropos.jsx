"use client";
import React from "react";
import Atropos from "atropos/react";
import Image from "next/image";
import "atropos/css";

function MyAtropos({ url, alt, tamaño }) {
	return (
		<Atropos
			className="antropos-text"
			style={{ width: tamaño, height: tamaño }}
			activeOffset={100}
			shadowScale={0}
		>
			<Image alt={alt} height={tamaño} width={tamaño} src={url} />
			<div className="flex justify-center capitalize text-color3">{alt}</div>
		</Atropos>
	);
}

export default MyAtropos;
