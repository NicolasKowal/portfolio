import React from "react";
import Image from "next/image";

function About() {
	return (
		<div className="md:w-[80%] mx-auto lg:w-[50%] h-[400px] flex bg-green-300">
			<div className="flex flex-col w-[50%] bg-blue-500">
				<Image
					className="lg:w-[400px] md:w-[300px] fancy-border-radius"
					width={400}
					height={400}
					src="/IMG-20230524-WA0019.jpg"
					alt="#"
				/>
			</div>
			<div className="flex flex-col items-center justify-center bg-blue-300 w-[40%] h-[100%]">
				<h1 className="flex items-end justify-center text-[2.5em] h-[50%] w-[100%] mx-auto text-center bg-red-100">
					Kowalkiewicz Nicolas
				</h1>
				<p className="flex items-top justify-center h-[50%] pl-3 pr-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio
					laboriosam neque atque saepe deserunt dolore quod. Odio odit
					cupiditate incidunt deleniti! Fugiat delectus enim sint laboriosam
					nemo amet autem?
				</p>
			</div>
		</div>
	);
}

export default About;
