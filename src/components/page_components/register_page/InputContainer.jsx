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
				<InputField placeholder="Email"></InputField>
				<InputField placeholder="Phone Number"></InputField>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button value="Register" className="red_button" />
				<Button value="Back to Login" className="" />
			</div>
		</div>
	);
};

export default InputContainer;
