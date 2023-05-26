/* eslint-disable react/prop-types */
import Ratings from "./Ratings";
const Product = ({ name, price, tags, rating, image }) => {
	return (
		<div className="w-full max-w-xl mx-auto h-auto overflow-hidden  rounded-[5px]">
			<div className="w-full h-48">
				<img src={image} className="w-full h-full" alt="" />
			</div>
			<div className="bg-white p-2">
				<div className="flex justify-between items-center">
					<p className="text-secondary font-bold">{name}</p>
					<p className="text-secondary font-bold">${price}</p>
				</div>
				<div className="w-full  mt-4 flex items-center justify-between">
					<div className="w-2/3 flex items-center justify-start gap-2">
						{tags.map((tag, index) => (
							<div key={index} className="w-auto px-2 bg-tags inline  rounded-[10px]  items-center justify-center">
								<p className="text-[12px] opacity-1"> {tag} </p>
							</div>
						))}
					</div>
					<div className="w-auto h-full  flex ">
						<Ratings rating={rating} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
