import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import Button from "../general/Button";

const Navbar = () => {
	return (
		<div className={classes.nav}>
			<nav>
				<li className={classes.link}>
					<Link to="/asd">Reservations</Link>
				</li>
			</nav>
			<div className={classes.profielContainer}>
				<div className={classes.userProfile}></div>
			</div>
		</div>
	);
};

export default Navbar;
