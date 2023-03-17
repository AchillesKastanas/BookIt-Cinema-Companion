import React, { useState, Children, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RootPage from "../pages/RootPage";
import Navbar from "../components/general/Navbar";

const AuthManager = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const jwt = sessionStorage.getItem("jwt");
		if (jwt) {
			// Verify JWT and set isLoggedIn to true if it's valid
			setIsLoggedIn(true);
		}
		else {
			window.alert("Your session has expired. Please log in again.")
			// Redirect to login page
			navigate("/login");
		}
	}, [children]);

	return isLoggedIn && (
		<>
			<Navbar/>
			{Children.map(children, (child, index) => child)}
		</>
	);
};

export default AuthManager;
