import React from "react";
import "animate.css";
import "../styles/globals.css";

function Contact() {
	return (
		<>
			<ul className="xs:grid xs:grid-cols-2 w-[100%] h-[30vh] sm:flex items-center justify-around">
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://www.linkedin.com/in/nicolaskowal/"
					>
						<img
							className="xs:h-[100px] lg:h-[150px] 2xl:h-[200px]  bounce"
							src="/media/linkedin.png"
							alt="linkedin"
						/>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://github.com/NicolasKowal"
					>
						<img
							className="xs:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/github.png"
							alt="github"
						/>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://wa.me/+5401125948523"
					>
						<img
							className="xs:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/whatsapp.png"
							alt="whatsapp"
						/>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="mailto:nicolas.kowal95@gmail.com"
					>
						<img
							className="xs:h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] bounce"
							src="/media/gmail.png"
							alt="gmail"
						/>
					</a>
				</li>
			</ul>
		</>
	);
}

export default Contact;
