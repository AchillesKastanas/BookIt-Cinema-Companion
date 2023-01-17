import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	const navigate = useNavigate();

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
				<Button value="Login with Google" className="" />
				<Button value="Sign Up" onClick={handleClick} />
			</div>
		</div>
	);
};

export default InputContainer;
