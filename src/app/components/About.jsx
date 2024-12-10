import React from "react";
import Image from "next/image";
import Download from "./Download";

function About() {
	return (
		<div className="sm:flex-col md:pt-5 md:pb-5 lg:flex-row lg:w-[100%] xl:w-[70%] flex text-color4 gap-2">
			<div className="flex flex-col justify-center items-center w-[50%] sm:w-[100%]">
				<Image
					className="w-[400px] fancy-border-radius"
					width={400}
					height={400}
					src="/profile.jpg"
					alt="profile"
				/>
			</div>
			<div className="flex flex-col items-center justify-center sm:w-[100%] w-[40%] h-[100%]">
				<h1 className="h-[30%] sm:w-[100%] w-[50%] flex items-center justify-center text-[2.5em] mx-auto text-center">
					Kowalkiewicz Nicolas
				</h1>
				<p className="flex items-center justify-center h-[50%] pl-1 pr-1 lg:">
					¡Hola! Tengo 29 años, soy desarrollador frontend con experiencia en
					React y estudiante de una tecnicatura en desarrollo de software. Me
					apasiona crear interfaces funcionales y atractivas, enfocándome en la
					experiencia del usuario. Siempre estoy aprendiendo y buscando nuevos
					desafíos para crecer como profesional. 🚀
				</p>
				<div className="sm:p-5 h-[20%] w-[100%] lg:h-[30%] flex items-center justify-center">
					<Download />
				</div>
			</div>
		</div>
	);
}

export default About;
