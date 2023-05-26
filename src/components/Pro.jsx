/* eslint-disable react/prop-types */
const Pro = (props) => {
	const { name, desc } = props;
	return (
		<div className="w-full h-auto bg-white relative rounded-[5px] p-4 pl-8">
			<h3 className="text-secondary text-xl mb-2 font-bold md:font-semibold">{name}</h3>
			<p className="text-secondary font-medium">{desc}</p>
			<div className="w-12 h-12 bg-white border-4 border-secondary rounded-full flex items-center justify-center absolute -left-6 top-0 bottom-0 my-auto">
				<props.icon className="text-2xl text-secondary" />
			</div>
		</div>
	);
};

export default Pro;
