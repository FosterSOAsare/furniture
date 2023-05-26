/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating }) => {
	const [stars, setStars] = useState([]);
	useEffect(() => {
		for (let i = 0; i < rating; i++) {
			setStars((prev) => [...prev, "filled"]);
		}
		for (let i = rating; i < 5; i++) {
			setStars((prev) => [...prev, "empty"]);
		}
	}, [rating]);

	return (
		<>
			{stars.map((star, index) => {
				return star === "filled" ? <AiFillStar key={index} className="text-secondary" /> : <AiOutlineStar key={index} />;
			})}
		</>
	);
};

export default Ratings;
