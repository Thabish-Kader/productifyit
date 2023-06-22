import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import ProductDemo from "./components/ProductDemo";
import { Showcase } from "./components/Showcase";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="mx-auto max-w-7xl py-4 px-8">
				<Hero />
				<Showcase />
				<ProductDemo />
			</main>
			<Footer />
		</>
	);
}
