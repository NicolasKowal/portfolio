"use client";
import React from "react";
import Atropos from "atropos/react";
import Image from "next/image";
import "atropos/css";

function MyAtropos({ url, alt }) {
	return (
		<Atropos className="antropos-text" activeOffset={100} shadowScale={0}>
			<Image alt={alt} height={150} width={150} src={url} />
		</Atropos>
	);
}

export default MyAtropos;
