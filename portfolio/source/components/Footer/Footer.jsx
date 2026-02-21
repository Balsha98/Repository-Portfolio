// IMORTED STYLESHEETS
import "./css/Footer.css";
import "./css/Media.css";

const Footer = function () {
	return (
		<footer className="footer-container">
			<p>&copy; {new Date().getFullYear()} Balša Bazović | All rights reserved.</p>
			<ul className="footer-container-socials-link-list">
				<li className="footer-container-socials-link-list-item">
					<a href="https://github.com/Balsha98" target="_blank">
						<ion-icon src="/media/icons/github.svg" />
					</a>
				</li>
				<li className="footer-container-socials-link-list-item">
					<a href="https://www.linkedin.com/in/balsha-bazovich" target="_blank">
						<ion-icon src="/media/icons/linkedin.svg" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
