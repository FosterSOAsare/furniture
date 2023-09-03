import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/output.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotDeveloped from "./pages/NotDeveloped";

function App() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage {...{ setShowMenu, showMenu }} />}></Route>
				<Route path="*" element={<NotDeveloped {...{ setShowMenu, showMenu }} />}></Route>
			</Routes>
		</div>
	);
}

export default App;
