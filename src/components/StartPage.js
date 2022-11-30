import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
	return (
		<>
			<div className="start-container">
				<p className="intro">Manage time effectively</p>
				<Link to="/MainPage">Start</Link>
			</div>
		</>
	);
};
export default StartPage;
