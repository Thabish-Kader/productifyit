import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Provider from "./components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ProductVision3D",
	description:
		"An application that enables entrepreneurs to design digital products within a three-dimensional canvas.",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Provider>
				<body className={`${inter.className} bg-zinc-900`}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</Provider>
		</html>
	);
}
