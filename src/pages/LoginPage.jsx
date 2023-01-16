import React from "react";
import InputContainer from "../components/page_components/login_page/InputContainer";

import "./LoginPage.css";
import MoviePosterContainer from "../components/general/MoviePosterContainer";

const LoginPage = () => {
	return (
		<div className="login-container">
			<div className="left_child">
				<p className="left_p">The Latest Movies</p>
				<MoviePosterContainer
					picUrl="/movie-poster.jpg"
					className={"movie_poster_container__red"}
				></MoviePosterContainer>
			</div>
			<InputContainer></InputContainer>
			<div className="right_child">
				<MoviePosterContainer
					picUrl="/movie-poster-2.jpg"
					className={"movie_poster_container__blue"}
				></MoviePosterContainer>
				<p>All In One Place</p>
			</div>
		</div>
	);
};

export default LoginPage;
