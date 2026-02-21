// IMORTED CUSTOM COMPONENTS
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
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
			</div>
		</>
	);
};

export default App;
