import React from "react";

import MoviePoster from "./MoviePoster";
import "./MoviePosterContainer.css";

const MoviePosterContainer = ({ picUrl, className }) => {
	return (
		<div className={className}>
			<MoviePoster picUrl={picUrl}></MoviePoster>
		</div>
	);
};

export default MoviePosterContainer;
