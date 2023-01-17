import React from "react";
import InputContainer from "../components/page_components/register_page/InputContainer";

import classes from "./RegisterPage.module.css";
import MoviePosterContainer from "../components/general/MoviePosterContainer";

const RegisterPage = () => {
	return (
		<div className={classes.registerContainer}>
			<div className={classes.leftChild}>
				<p className={classes.leftP}>The Latest Movies</p>
				<MoviePosterContainer
					picUrl="/movie-poster.jpg"
					className={"movie_poster_container__red"}
				></MoviePosterContainer>
			</div>
			<InputContainer></InputContainer>
			<div className={classes.rightChild}>
				<MoviePosterContainer
					picUrl="/movie-poster-2.jpg"
					className={"movie_poster_container__blue"}
				></MoviePosterContainer>
				<p>All In One Place</p>
			</div>
		</div>
	);
};

export default RegisterPage;
