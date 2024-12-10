"use client";
import React from "react";
import Atropos from "atropos/react";
import Image from "next/image";
import "atropos/css";

function MyAtropos({ url, alt }) {
	return (
		<Atropos
			className="antropos-text flex items-center justify-center"
			activeOffset={100}
			shadowScale={0}
		>
			<Image
				alt={alt}
				className="sm:w-[100px] md:w-[125px] lg:w-[150px] xl:w-[200px] flex items-center justify-center"
				height={100}
				width={100}
				src={url}
			/>
			<div className="flex justify-center capitalize text-color3">{alt}</div>
		</Atropos>
	);
}

export default MyAtropos;
