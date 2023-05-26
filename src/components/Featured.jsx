import FeaturedImage from "../assets/featured.png";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Button from "./Button";
const Featured = () => {
	return (
		<section className="w-full h-auto relative py-16 px-8" id="featured">
			<div className="w-full max-w-xl md:max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap:4 md:gap-8">
				<article className="w-full md:w-1/2 relative h-auto md:px-6">
					<img src={FeaturedImage} alt="" />
				</article>
				<article className="w-full md:w-1/2 py-4 h-auto p-0 md:pr-6">
					<h1 className="text-secondary text-3xl md:text-4xl mb-6 font-bold">Tufted grey sofa</h1>
					<p className="text-secondary text-[16px] md:text-xl font-medium w-full">
						Details: Excluding comfort and elegance, this wing back chair offers the ultimate safe haven. Its abundantly soft cushions are adorned with elegant fabrics as beautiful and
						inviting as they are conditioned to withstand daily wear and tear.
					</p>

					<div className="flex gap-4 mt-6 justify-between items-center">
						<p className="text-3xl font-bold text-secondary">$250</p>
						<Button text="Buy now" color="#583101" sx="h-16 w-1/2" />
					</div>
				</article>
			</div>
			<div className="hidden w-10 h-10 bg-controls rounded-full absolute left-10 md:flex items-center justify-center  top-0 bottom-0 my-auto">
				<AiFillCaretLeft className="text-secondary text-2xl" />
			</div>
			<div className="hidden w-10 h-10 bg-controls rounded-full absolute right-10 md:flex items-center justify-center  top-0 bottom-0 my-auto">
				<AiFillCaretRight className="text-secondary text-2xl" />
			</div>
		</section>
	);
};

export default Featured;
