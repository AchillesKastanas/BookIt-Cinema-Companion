import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import classes from "./Navbar.module.css";
import Button from "../general/Button";

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();
		window.history.back();
	};

	const handleLogout = () => {
		// Remove the JWT from session storage
		sessionStorage.removeItem("jwt");
		navigate("/login");
	};

	return (
		<div className={classes.nav}>
			{location.pathname !== "/home" && (
				<div className={classes.backButtonContainer}>
					<Button
						value="Go Back"
						className="red_button"
						onClick={handleBackButton}
					/>
				</div>
			)}
			{location.pathname !== "home" && (
				<div className={classes.backButtonContainer}>
					<Button
						value="Logout"
						className="red_button"
						onClick={handleLogout}
					/>
				</div>
			)}
			<div className={classes.linksContainer}>
				{location.pathname !== "/reservations" && (
					<nav>
						<li className={classes.link}>
							<Link to="/reservations">Reservations</Link>
						</li>
					</nav>
				)}
			</div>
			<div className={classes.profileContainer}>
				<div className={classes.userProfile}></div>
			</div>
		</div>
	);
};

export default Navbar;
