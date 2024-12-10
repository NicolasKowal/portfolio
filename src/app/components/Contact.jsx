import React from "react";
import "animate.css";
import "../styles/globals.css";

function Contact() {
	return (
		<>
			<ul className="sm:w-[100%] w-[75%] flex items-center justify-around sm:text-[.7em] md:text-[.9em] lg:text-[1em] sm:h-[25vh]">
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://www.linkedin.com/in/nicolaskowal/"
					>
						<img
							className="sm:h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/linkedin.png"
							alt="linkedin"
						/>
						<p className="pt-3 flex items-center justify-center text-color4">
							Linkedin
						</p>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://github.com/NicolasKowal"
					>
						<img
							className="sm:h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/github.png"
							alt="github"
						/>
						<p className="pt-3 flex items-center justify-center text-color4">
							GitHub
						</p>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://wa.me/+5401125948523"
					>
						<img
							className="sm:h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/whatsapp.png"
							alt="whatsapp"
						/>
						<p className="pt-3 flex items-center justify-center text-color4">
							11-2594-8523
						</p>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="mailto:nicolas.kowal95@gmail.com"
					>
						<img
							className="sm:h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/gmail.png"
							alt="gmail"
						/>
						<p className="pt-3 w-[100%] flex items-center justify-center text-color4">
							Nicolas.kowal95@gmail.com
						</p>
					</a>
				</li>
			</ul>
		</>
	);
}

export default Contact;
