import React from "react";

import classes from "./RootPage.module.css";
import Navbar from "../components/general/Navbar";

const RootPage = () => {
	return (
		<>
			<Navbar />
			<div className={classes.root}>eimai to root page</div>
		</>
	);
};

export default RootPage;
