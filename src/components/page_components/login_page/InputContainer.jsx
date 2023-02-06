import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	const navigate = useNavigate();

	const clientId = process.env.REACT_APP_CLIENT_ID;

	function handleLoginWithGoogle() {
		const redirectUri = "http://localhost:3000/oauth2/callback";

		const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email`;

		console.log("clientId: " + clientId);
		window.location.replace(url);
	}

	function handleClick() {
		navigate("/register");
	}

	return (
		<div className={classes.inputContainer}>
			<div className={classes.inputContainerTop}>
				<InputField placeholder="Username"></InputField>
				<InputField placeholder="Password"></InputField>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button value="Login" className="red_button" />
				<Button
					value="Login with Google"
					onClick={handleLoginWithGoogle}
				/>
				<Button value="Sign Up" onClick={handleClick} />
			</div>
		</div>
	);
};

export default InputContainer;
