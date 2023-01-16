import React from "react";

import "./InputContainer.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	return (
		<div className="input_container">
			<div className="input_container__top">
				<InputField placeholder="Username"></InputField>
				<InputField placeholder="Password"></InputField>
			</div>
			<div className="input_container__bottom">
				<Button value="Login" className="red_button" />
				<Button value="Login with Google" className="" />
				<Button value="Sign Up" className="" />
			</div>
		</div>
	);
};

export default InputContainer;
