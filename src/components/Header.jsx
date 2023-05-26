/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import { headerLinks } from "../data/links";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/logo.png";

const Header = ({ setShowMenu }) => {
	return (
		<header className="w-full h-auto py-8 ticky top-0 left-0 z-[5] px-4 bg-secondary">
			<div className="w-full h-full max-w-6xl mx-auto flex items-center justify-between ">
				<div className="w-32 h-auto">
					<img src={Logo} alt="Website's Logo" />
				</div>
				<nav className="hidden md:flex gap-8 items-center justify-between">
					{headerLinks.map((link, index) => (
						<NavLink key={index} to={link.link} className="text-white opacity-60 hover:opacity-100 font-medium">
							{link.name}
						</NavLink>
					))}
				</nav>
				<Button text="Register" sx="hidden md:block" />
				<button className="md:hidden" onClick={() => setShowMenu(true)}>
					<AiOutlineMenu className="text-white text-2xl" />
				</button>
			</div>
		</header>
	);
};

export default Header;
