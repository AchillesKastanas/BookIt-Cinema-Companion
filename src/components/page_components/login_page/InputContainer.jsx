import React from "react";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	return (
		<div className={classes.inputContainer}>
			<div className={classes.inputContainerTop}>
				<InputField placeholder="Username"></InputField>
				<InputField placeholder="Password"></InputField>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button value="Login" className="red_button" />
				<Button value="Login with Google" className="" />
				<Button value="Sign Up" className="" />
			</div>
		</div>
	);
};

export default InputContainer;
