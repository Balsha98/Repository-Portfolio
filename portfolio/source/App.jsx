// IMORTED CUSTOM COMPONENTS
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";
// IMORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";

const App = function () {
	return (
		<>
			<Nav />
			<div className="div-main-edge-container">
				<Hero />
				<Statistics />
				<Footer />
			</div>
		</>
	);
};

export default App;
