/* eslint-disable react/prop-types */
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Button from "../components/Button";

const NotDeveloped = ({ setShowMenu, showMenu }) => {
	return (
		<div className="w-full h-screen">
			<Header setShowMenu={setShowMenu} />
			<MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
			<div className="flex items-center flex-col justify-center h-[80vh] w-full">
				<h1 className="font-bold text-2xl text-center md:text-5xl mb-6">Page Not Developed</h1>
				<Button text="Back To Homepage" sx="w-auto h-12" href="/" color="#583101" />
			</div>
		</div>
	);
};

export default NotDeveloped;
