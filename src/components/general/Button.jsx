import React from "react";

import "./Button.css";

const Button = ({ value, className, onChange }) => (
	<>
		<button className={className}>{value}</button>
	</>
);

export default Button;
