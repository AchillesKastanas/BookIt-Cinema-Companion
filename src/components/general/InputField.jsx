import React from "react";

import "./InputField.css";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
	<>
		<input
			type={type}
			value={value}
			name={name}
			className="input_field"
			onChange={onChange}
			placeholder={placeholder}
		/>
	</>
);

export default InputField;
