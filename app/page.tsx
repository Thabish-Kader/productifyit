import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="mx-auto max-w-6xl py-4 px-8">
				<Hero />
				<Showcase />
			</main>
			<Footer />
		</>
	);
}
