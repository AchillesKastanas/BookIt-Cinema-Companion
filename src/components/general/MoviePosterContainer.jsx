import React from "react";

import MoviePoster from "./MoviePoster";
import classes from "./MoviePosterContainer.module.css";

const MoviePosterContainer = ({ picUrl, className }) => {
	return (
		<div className={classes[`${className}`]}>
			<MoviePoster picUrl={picUrl}></MoviePoster>
		</div>
	);
};

export default MoviePosterContainer;
