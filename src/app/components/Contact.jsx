import React from "react";
import "animate.css";
import "../styles/globals.css";

function Contact() {
	return (
		<>
			<ul className="w-[75%] flex items-center justify-around">
				<li>
					<a href="">
						<img
							className="h-[150px] bounce"
							src="/media/linkedin.png"
							alt="linkedin"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[150px] bounce"
							src="/media/github.png"
							alt="github"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[150px] bounce"
							src="/media/whatsapp.png"
							alt="whatsapp"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[150px] bounce"
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
