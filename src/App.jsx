import "./App.css";
import "./styles/output.css";

import chooseUs from "./data/pros";
import products from "./data/products";
import customers from "./data/customers";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Pro from "./components/Pro";
import Button from "./components/Button";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

function App() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="w-full">
			<Header setShowMenu={setShowMenu} />
			<MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
			<Hero />
			<section className="w-full h-auto py-16 px-12 md:px-4 bg-secondary" id="chooseUs">
				<div className="w-full max-w-5xl mx-auto items-center justify-center flex flex-col gap-8">
					<h3 className="text-white text-3xl font-bold mb-4">Why choose us?</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32 max-w-xl md:max-w-none mx-auto ">
						{chooseUs.map((reason, index) => (
							<Pro key={index} {...reason} />
						))}
					</div>
				</div>
			</section>
			<section className="w-full h-auto py-16 px-8 bg-white" id="products">
				<div className="w-full max-w-2xl md:max-w-5xl mx-auto items-center justify-center flex flex-col gap-8">
					<h3 className="text-secondary text-3xl font-bold mb-4">Our Products</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 w-full gap-8 max-w-2xl md:max-w-none mx-auto">
						{products.map((product, index) => (
							<Product key={index} {...product} />
						))}
					</div>

					<div className="mt-4 w-auto sm:w-3/5 max-w-xl md:w-2/5 mx-auto md:max-w-none ">
						<Button variant="outlined" text="Explore products" sx="w-full h-12" />
					</div>
				</div>
			</section>
			<section className="w-full h-auto py-16 px-12 md:px-4" id="reviews">
				<div className="w-full  max-w-xl md:max-w-5xl mx-auto items-center justify-center flex flex-col gap-8">
					<h3 className="text-white text-3xl font-bold mb-6">Top Customer&apos;s reviews</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 ">
						{customers.map((customer, index) => (
							<Customer key={index} {...customer} />
						))}
					</div>
				</div>
			</section>
			<Featured />
			<Footer />
		</div>
	);
}

export default App;
