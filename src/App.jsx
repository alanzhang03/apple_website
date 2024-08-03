import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Snippets from "./components/Snippets";

function App() {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Snippets></Snippets>
			<Highlights />
			<Features />
			<HowItWorks />
			<Model />
			<Footer />
		</main>
	);
}

export default App;
