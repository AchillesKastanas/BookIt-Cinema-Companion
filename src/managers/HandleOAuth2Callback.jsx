import React, { useEffect } from "react";

function HandleOAuth2Callback({ code, scope, authuser, prompt }) {
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
			// Use the code to exchange for an access token
			// ...

			// Redirect to the home page once the access token is obtained
			window.location.replace("http://localhost:3000/home");
		} else {
			alert("Login failed.");
			window.location.replace("http://localhost:3000/login");
		}
	}, []);

	return <div>Loading...</div>;
}

export default HandleOAuth2Callback;
