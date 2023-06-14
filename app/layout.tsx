import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ProductVision3D",
	description:
		"An application that enables entrepreneurs to design digital products within a three-dimensional canvas.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-900`}>{children}</body>
		</html>
	);
}
