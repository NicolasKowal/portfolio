import React from "react";
import Image from "next/image";
import Download from "./Download";

function About() {
	return (
		<div className="md:w-[80%] mx-auto lg:w-[70%] h-[420px] flex text-color4">
			<div className="flex flex-col justify-center items-center w-[50%]">
				<Image
					className="lg:w-[400px] md:w-[300px] fancy-border-radius"
					width={400}
					height={400}
					src="/IMG-20230524-WA0019.jpg"
					alt="#"
				/>
			</div>
			<div className="flex flex-col items-center justify-center w-[40%] h-[100%]">
				<h1 className="flex items-center justify-center text-[2.5em] h-[30%] w-[50%] mx-auto text-center">
					Kowalkiewicz Nicolas
				</h1>
				<p className="flex items-center justify-center h-[50%] pl-1 pr-1">
					¡Hola! Tengo 29 años, soy desarrollador frontend con experiencia en
					React y estudiante de una tecnicatura en desarrollo de software. Me
					apasiona crear interfaces funcionales y atractivas, enfocándome en la
					experiencia del usuario. Siempre estoy aprendiendo y buscando nuevos
					desafíos para crecer como profesional. 🚀
				</p>
				<div className="h-[20%] w-[100%] flex items-center justify-center">
					<Download />
				</div>
			</div>
		</div>
	);
}

export default About;
