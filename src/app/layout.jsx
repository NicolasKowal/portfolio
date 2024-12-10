import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
export const metadata = {
	title: "Kowalkiewicz Nicolas Portfolio",
	description: "porfolio creado en next js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className="bg-color1">
				<Navbar />
				<main className="lg:w-[90%] mx-auto bg-color1 font-roboto">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
