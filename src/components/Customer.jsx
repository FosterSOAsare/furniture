/* eslint-disable react/prop-types */
const Customer = ({ image, name, comment }) => {
	return (
		<div className="w-full  bg-[#fff6eb14] p-4 relative rounded-[5px] text-white">
			<h3 className="font-bold mb-2">{name}</h3>
			<p className="text-[12px] ">{comment}</p>

			<div className="w-12 h-12  absolute rounded-full -top-6 -left-6">
				<img src={image} alt="Client's image" className="w-full h-full" />
			</div>
		</div>
	);
};

export default Customer;
