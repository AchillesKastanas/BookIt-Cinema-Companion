import React from "react";

import classes from "./Button.module.css";

const Button = ({ value, className, onClick }) => (
	<>
		<button className={classes[`${className}`]} onClick={onClick}>
			{value}
		</button>
	</>
);

export default Button;
