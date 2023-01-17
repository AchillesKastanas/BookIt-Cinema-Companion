import React from "react";

import classes from "./Button.module.css";

const Button = ({ value, className, onChange }) => (
	<>
		<button className={classes[`${className}`]}>{value}</button>
	</>
);

export default Button;
