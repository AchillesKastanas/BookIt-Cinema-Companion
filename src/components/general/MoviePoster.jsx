import React from "react";

import "./MoviePoster.css";

const MoviePoster = ({ picUrl }) => {
	const style = { backgroundImage: `url(${picUrl})` };

	return <div className="movie_poster" style={style}></div>;
};

export default MoviePoster;
