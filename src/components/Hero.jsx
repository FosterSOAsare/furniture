import Button from "./Button";

import HeroImage from "../assets/hero-image.png";
const Hero = () => {
	return (
		<section className="w-full h-auto py-6 md:py-16 px-4 ">
			<div className="w-full md:max-w-6xl  flex flex-col md:flex-row items-center justify-between gap-8 max-w-xl mx-auto">
				<article className="w-full md:w-1/2 py-4 h-auto -0 md:pr-6 text-center md:text-left">
					<h1 className="text-secondary text-4xl md:text-6xl mb-6 font-bold">Find the perfect furniture pieces to complete your home.</h1>
					<p className="text-secondary text-md md:text-xl font-medium w-full  md:w-4/5">&quot;Transform your home into a beautiful sanctuary with our stunning furniture collection.&quot;</p>

					<div className="flex gap-4 mt-6 flex-col md:flex-row">
						<Button text="Register" color="#583101" sx="h-12" />
						<Button text="Explore products" variant="outlined" sx="h-12" href="/products" />
					</div>
				</article>
				<article className="w-full md:w-1/2 relative h-auto">
					<img src={HeroImage} alt="" />
					<div className="w-auto inline-block h-auto bg-secondary rounded-full p-4 text-center text-white font-bold absolute right-0 bottom-0 rotate-[33.23deg] ">
						<h3>30%</h3>
						<p>
							OFF ALL <br />
							SALES
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
