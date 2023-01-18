import React from "react";

import MoviePoster from "./MoviePoster";
import classes from "./ColoredContainer.module.css";

const ColoredContainer = ({ picUrl, className }) => {
	return (
		<div className={classes[`${className}`]}>
			<MoviePoster picUrl={picUrl}></MoviePoster>
		</div>
	);
};

export default ColoredContainer;
