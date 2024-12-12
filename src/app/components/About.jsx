import Image from "next/image";
import Download from "./Download";

function About() {
	return (
		<div className="xs:flex-col md:pt-5 md:pb-5 lg:flex-row lg:w-[100%] xl:w-[75%] 2xl:h-[500px] flex text-color4 gap-2">
			<div className="flex flex-col justify-center items-center w-[50%] xs:w-[100%]">
				<Image
					className=" xs:w-[75%] md:w-[60%] lg:w-[80%] fancy-border-radius"
					width={400}
					height={400}
					src="/profile.jpg"
					alt="profile"
				/>
			</div>
			<div className="flex flex-col items-center justify-center sm:w-[100%] h-[100%]">
				<h1 className="h-[30%] sm:w-[100%] sm:h-[10vh] w-[50%] flex items-center justify-center text-[2.5em] mx-auto text-center">
					Kowalkiewicz Nicolas
				</h1>
				<p className="xs:w-[80%] flex items-center justify-center h-[50%] pl-1 pr-1 md:text-[1.3em]">
					¡Hola! Tengo 29 años, soy desarrollador frontend con experiencia en
					React y estudiante de una tecnicatura en desarrollo de software. Me
					apasiona crear interfaces funcionales y atractivas, enfocándome en la
					experiencia del usuario. Siempre estoy aprendiendo y buscando nuevos
					desafíos para crecer como profesional. 🚀
				</p>
				<div className="xs:p-5 h-[20%] w-[100%] lg:h-[30%] flex items-center justify-center">
					<Download />
				</div>
			</div>
		</div>
	);
}

export default About;
