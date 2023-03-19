import React from "react";

import classes from "./Button.module.css";

const Button = ({ value, className, onClick, disabled, icon }) => (
	<>
		<button
			className={classes[`${className}`]}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && (
				<img
					src={icon}
					alt=""
					style={{
						width: "24px",
						height: "24px",
					}}
				/>
			)}
			{value}
		</button>
	</>
);

export default Button;
