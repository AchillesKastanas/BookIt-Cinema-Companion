import React, { useState, Children, useEffect } from "react";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RootPage from "../pages/RootPage";
import Navbar from "../components/general/Navbar";

const AuthManager = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const jwt = sessionStorage.getItem("jwt");
		if (jwt) {
			// Verify JWT and set isLoggedIn to true if it's valid
			// ...
			setIsLoggedIn(true);
		}
	}, []);

	const handleLogin = (jwt) => {
		// Store the JWT in session storage
		sessionStorage.setItem("jwt", jwt);
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		// Remove the JWT from session storage
		sessionStorage.removeItem("jwt");
		setIsLoggedIn(false);
	};

	return isLoggedIn ? (
		<>
			<Navbar handleLogout={handleLogout} />
			{Children.map(children, (child, index) => child)}
		</>
	) : (
		(window.alert("Your session has expired. Please log in again."),
		(<LoginPage onLogin={handleLogin} />))
	);
};

export default AuthManager;
