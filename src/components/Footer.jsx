import Button from "./Button";
import { headerLinks } from "../data/links";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full h-auto bg-[#2F1A01] py-16 text-white px-8">
			<div className="w-full h-auto mx-auto max-w-xl md:max-w-6xl flex flex-col md:flex-row justify-between items-start gap-4">
				<article className="w-full md:w-1/3">
					<h3 className="text-2xl mb-4 text-center md:text-left">Subscribe to our Newsletter</h3>
					<input
						type="text"
						className="block w-full mb-4 h-10 bg-transparent border-[1px] border-white rounded-[5px] px-2 focus:outline-0"
						aria-label="Enter email "
						placeholder="Enter email to subscribe"
					/>
					<Button text="Subscribe now" sx="w-full md:w-auto h-12" />
				</article>
				<article className="w-full md:w-1/2 flex flex-col md:flex-row text-center items-center md:items-start justify-between mt-4 md:mt-0">
					<div>
						<h3 className="text-2xl font-bold">Links</h3>
						<div className="mt-4">
							{headerLinks.map((link, index) => (
								<NavLink key={index} to={link.link} className="text-sm mb-2  block hover:underline opacity-[0.6] hover:opacity-100">
									{link.name}
								</NavLink>
							))}
						</div>
					</div>
					<div className="mt-4 md:mt-0">
						<h3 className="mb-4 text-2xl font-bold">Our Products</h3>
						<div>
							{["Grey Tufted Sofas", "Office Tables", "Livingroom Chairs", "Kitchen Tables", "Classroom Chairs", "Seminar Hall Chairs"].map((product, index) => (
								<NavLink to="/products" className="text-sm mb-2  block hover:underline" key={index}>
									{product}
								</NavLink>
							))}
						</div>
					</div>
					<div className="mt-4 md:mt-0">
						<h3 className="text-2xl font-bold">Contact us</h3>
						<p className="mt-4">Head Office:</p>
						<p className="text-sm mt-4">
							4517 Washington Ave. <br />
							Manchester, Kentuncky <br />
							39495
						</p>
						<p className="mt-4 font-medium">Phone Lines:</p>
						<p className="mt-[2px] font-medium">+234103142217</p>
					</div>
				</article>
			</div>
		</footer>
	);
};

export default Footer;
