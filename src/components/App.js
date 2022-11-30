import React from "react";
import StartPage from "./StartPage";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";

import "../style/reset.css";
import "../style/mainPage.css";
import "../style/startPage.css";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/MainPage" element={<MainPage />} />
			</Routes>
		</>
	);
};
export default App;
