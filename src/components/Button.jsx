/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ text, href, onClick, sx, color = "white", variant = "contained" }) => {
	return (
		<>
			{!href && (
				<button
					className={`px-6 rounded-[5px] py-2 ${sx} font-semibold hover:opacity-50`}
					onClick={onClick ? () => onClick() : () => console.log("dead")}
					style={{
						backgroundColor: variant === "contained" ? color : "transparent",
						color: color === "white" ? "#583101" : "white",
						border: variant !== "contained" ? `1px solid ${color === "white" ? "#583101" : "white"}` : "transparent",
					}}>
					{text}
				</button>
			)}
			{href && (
				<Link
					to={href}
					className={`px-6 rounded-[5px] py-2 ${sx} font-semibold hover:opacity-50`}
					style={{
						backgroundColor: variant === "contained" ? color : "transparent",
						color: color === "white" ? "#583101" : "white",
						border: variant !== "contained" ? `1px solid ${color === "white" ? "#583101" : "white"}` : "transparent",
					}}>
					{text}
				</Link>
			)}
		</>
	);
};

export default Button;
