import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function HandleOAuth2Callback({ code, scope, authuser, prompt }) {
	const navigate = useNavigate();

	const checkLoginSuccess = () => {
		if (code && scope && authuser && prompt) {
			console.log("Login was successful!");
			return true;
		} else {
			console.log("Login failed.");
			return false;
		}
	};

	useEffect(() => {
		console.log("code" + code);
		console.log("scope" + scope);
		console.log("authuser" + authuser);
		console.log("prompt" + prompt);

		if (checkLoginSuccess()) {
			//Store the new JWT in the session storage
			sessionStorage.setItem("jwt", "!");
			// Redirect to the home page once the access token is obtained
			navigate("/home");
		} else {
			alert("Login failed.");
			navigate("/login");
		}
	}, []);

	return <div>Loading...</div>;
}

export default HandleOAuth2Callback;
