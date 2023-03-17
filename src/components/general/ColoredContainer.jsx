import React, { Children } from "react";

import MoviePoster from "./MoviePoster";
import classes from "./ColoredContainer.module.css";

const ColoredContainer = ({ picUrl, className, children }) => {
	return (
		<div className={classes[`${className}`]}>
			{picUrl && <MoviePoster picUrl={picUrl}></MoviePoster>}
			{Children.map(children, (child, index) => child)}
		</div>
	);
};

export default ColoredContainer;
