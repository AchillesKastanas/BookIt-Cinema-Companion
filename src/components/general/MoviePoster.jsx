import React from "react";

import classes from "./MoviePoster.module.css";

const MoviePoster = ({ picUrl, className }) => {
	const style = { backgroundImage: `url(${picUrl})` };

	return (
		<div
			className={classes[`${className || "moviePoster"}`]}
			style={style}
		></div>
	);
};

export default MoviePoster;
