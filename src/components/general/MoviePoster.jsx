import React from "react";

import classes from "./MoviePoster.module.css";

const MoviePoster = ({ picUrl }) => {
	const style = { backgroundImage: `url(${picUrl})` };

	return <div className={classes.moviePoster} style={style}></div>;
};

export default MoviePoster;
