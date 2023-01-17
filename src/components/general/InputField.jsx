import React from "react";

import classes from "./InputField.module.css";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
	<>
		<input
			type={type}
			value={value}
			name={name}
			className={classes.inputField}
			onChange={onChange}
			placeholder={placeholder}
		/>
	</>
);

export default InputField;
