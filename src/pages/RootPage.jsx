import React from "react";

import classes from "./RootPage.module.css";
import Navbar from "../components/general/Navbar";
import HomePage from "./HomePage";

const RootPage = () => {
	return (
		<>
			<Navbar />
			<HomePage></HomePage>
		</>
	);
};

export default RootPage;
