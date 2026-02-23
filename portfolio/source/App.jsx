// IMORTED CUSTOM COMPONENTS
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// IMORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";

const App = function () {
	return (
		<>
			<Nav />
			<Loader />
			<div className="div-main-edge-container">
				<Hero />
				<Statistics />
				<Projects />
				<Skills />
				<Experience />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
