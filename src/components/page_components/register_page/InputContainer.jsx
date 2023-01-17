import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/login");
	}

	return (
		<div className={classes.inputContainer}>
			<div className={classes.inputContainerTop}>
				<InputField placeholder="Username"></InputField>
				<InputField placeholder="Password"></InputField>
				<InputField placeholder="Email"></InputField>
				<InputField placeholder="Phone Number"></InputField>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button value="Register" className="red_button" />
				<Button value="Back to Login" onClick={handleClick} />
			</div>
		</div>
	);
};

export default InputContainer;
