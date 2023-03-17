import React from "react";

import classes from "./InputField.module.css";

const InputField = ({
	value,
	label,
	name,
	placeholder,
	type,
	onChange,
	pattern,
}) => (
	<>
		<input
			type={type}
			value={value}
			name={name}
			className={classes.inputField}
			onChange={onChange}
			placeholder={placeholder}
			pattern={pattern}
		/>
	</>
);

export default InputField;
