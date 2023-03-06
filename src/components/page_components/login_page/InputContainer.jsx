import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = ({ onLogin }) => {
	const [username, setUsername] = useState("achilles");
	const [password, setPassword] = useState("Achilles123");
	const isFormValid = (username && password) !== "";
	const navigate = useNavigate();

	const clientId = process.env.REACT_APP_CLIENT_ID;

	function handleLoginWithGoogle() {
		const redirectUri = "http://localhost:3000/oauth2/callback";

		const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email`;

		console.log("clientId: " + clientId);
		window.location.replace(url);
	}

	function goToRegister() {
		navigate("/register");
	}

	const handleUsernameChange = (event) => {
		const usernameInput = event.target;
		setUsername(usernameInput.value);
		if (!usernameInput.value) {
			usernameInput.setCustomValidity("Please enter a username");
		} else {
			usernameInput.setCustomValidity("");
		}
	};

	const handlePasswordChange = (event) => {
		const passwordInput = event.target;
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

		setPassword(passwordInput.value);
		if (!passwordRegex.test(passwordInput.value)) {
			passwordInput.setCustomValidity(
				"Password must contain 8-16 characters with at least one uppercase letter, one lowercase letter, and one number"
			);
		} else {
			passwordInput.setCustomValidity("");
		}
	};

	const handleLogin = async (event) => {
		event.preventDefault();

		if (!isFormValid) {
			return;
		}

		const formData = {
			username,
			password,
		};

		fetch("http://localhost:5556/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			//If response is not 200, throw an error
			.then((response) => {
				if (response.status !== 200) {
					response.json().then((data) => {
						alert(
							"Details: " +
								data.details +
								"\nMessage: " +
								data.message
						);
					});
					throw Error(response.statusText);
				}

				//Store the new JWT in the session storage
				sessionStorage.setItem("jwt", username);
				navigate("/home");
			})
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className={classes.inputContainer}>
			<div className={classes.inputContainerTop}>
				<InputField
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
				></InputField>
				<InputField
					placeholder="Password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				></InputField>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button
					value="Login"
					className="red_button"
					onClick={handleLogin}
				/>
				<Button
					value="Login with Google"
					onClick={handleLoginWithGoogle}
				/>
				<Button value="Sign Up" onClick={goToRegister} />
			</div>
		</div>
	);
};

export default InputContainer;
