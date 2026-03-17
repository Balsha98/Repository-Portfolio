// IMPORTED CUSTOM COMPONENTS
import { useState } from "react";
// IMPORTED CUSTOM COMPONENTS
import Loader from "./views/Loader/Loader";
import Nav from "./views/Nav/Nav";
import Hero from "./views/Hero/Hero";
import Statistics from "./views/Statistics/Statistics";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import Experience from "./views/Experience/Experience";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";
// IMPORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";

const App = function () {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<Loader isLoading={isLoading} onSetIsLoading={setIsLoading} />
			<main className={`main-container${!isLoading ? " active" : ""}`}>
				<Nav />
				<div className="div-main-edge-container">
					<Hero />
					<Statistics />
					<Projects />
					<Skills />
					<Experience />
					<Contact />
					<Footer />
				</div>
			</main>
		</>
	);
};

export default App;
