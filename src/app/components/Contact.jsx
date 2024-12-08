import React from "react";
import "animate.css";
import "../styles/globals.css";

function Contact() {
	return (
		<div className="bg-green-300 pt-[30px] pb-[30px] h-[200px] flex items-center">
			<ul className="flex items-center justify-around w-[50%] mx-auto">
				<li>
					<a href="">
						<img
							className="h-[100px] bounce"
							src="/media/linkedin.png"
							alt="linkedin"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[100px] bounce"
							src="/media/github.png"
							alt="github"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[100px] bounce"
							src="/media/whatsapp.png"
							alt="whatsapp"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="h-[100px] bounce"
							src="/media/gmail.png"
							alt="gmail"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
