import React from "react";

import classes from "./Button.module.css";

const Button = ({ value, className, onClick, disabled }) => (
	<>
		<button
			className={classes[`${className}`]}
			onClick={onClick}
			disabled={disabled}
		>
			{value}
		</button>
	</>
);

export default Button;
