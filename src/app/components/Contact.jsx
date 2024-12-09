import React from "react";
import "animate.css";
import "../styles/globals.css";

function Contact() {
	return (
		<>
			<ul className="w-[75%] flex items-center justify-around">
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://www.linkedin.com/in/nicolaskowal/"
					>
						<img
							className="h-[150px] bounce"
							src="/media/linkedin.png"
							alt="linkedin"
						/>
						<p className="pt-3 flex items-center justify-center text-color4 text-[1.1em]">
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
							className="h-[150px] bounce"
							src="/media/github.png"
							alt="github"
						/>
						<p className="pt-3 flex items-center justify-center text-color4 text-[1.1em]">
							GitHub
						</p>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="https://wa.me/+5401125948523
"
					>
						<img
							className="h-[150px] bounce"
							src="/media/whatsapp.png"
							alt="whatsapp"
						/>
						<p className="pt-3 flex items-center justify-center text-color4 text-[1.1em]">
							11-2594-8523
						</p>
					</a>
				</li>
				<li>
					<a
						className="flex flex-col items-center justify-center"
						target="_blank"
						href="mailto:nicolas.kowal95@gmail.com?subject=Portfolio&body=Hola,%20quiero%20más%20información."
					>
						<img
							className="h-[150px] bounce"
							src="/media/gmail.png"
							alt="gmail"
						/>
						<p className="pt-3 w-[100%] flex items-center justify-center text-color4 text-[1.1em]">
							Nicolas.kowal95@gmail.com
						</p>
					</a>
				</li>
			</ul>
		</>
	);
}

export default Contact;
