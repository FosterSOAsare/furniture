/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/components/*.jsx", "./src/pages/*.jsx", "./src/*.jsx"],
	theme: {
		extend: {
			screens: {
				xxs: "0px",
				xs: "550px", // Add a new breakpoint
				sm: "600px",
				md: "900px",
				mdl: "1024px",
				lg: "1224px",
				xl: "1536px",
			},
			colors: {
				secondary: "#583101",
				white: "#FFF6EB",
				tags: "rgba(88, 49, 1, 0.13)",
				controls: "rgba(88, 49, 1, 0.5)",
			},
		},
	},
	plugins: [],
};
