/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import { headerLinks } from "../data/links";

import Button from "./Button";

import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileMenu = ({ setShowMenu, showMenu }) => {
	return (
		<aside className={`md:hidden w-full h-[100vh] bg-secondary fixed top-0 ${showMenu ? "left-0" : "-left-[100%]"} z-[5] transition-all duration-300`}>
			<div className="w-full  flex justify-end items-center h-auto p-4">
				<AiOutlineCloseCircle className="text-white text-2xl" onClick={() => setShowMenu(false)} />
			</div>
			<nav className="flex flex-col gap-8 items-start mt-6 px-6 justify-between">
				{headerLinks.map((link, index) => (
					<NavLink key={index} to={link.link} className="text-white opacity-60 hover:opacity-100 font-medium">
						{link.name}
					</NavLink>
				))}
				<Button text="Register" sx="mt-4 w-1/2" />
			</nav>
		</aside>
	);
};

export default MobileMenu;
