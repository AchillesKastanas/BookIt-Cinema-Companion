import React from "react";
import InputContainer from "../components/page_components/login_page/InputContainer";

import "./LoginPage.css";
import MoviePosterContainer from "../components/general/MoviePosterContainer";

const LoginPage = () => {
	return (
		<div className="login-container">
			<div className="left_child">
				<MoviePosterContainer></MoviePosterContainer>
			</div>
			<InputContainer></InputContainer>
			<div className="right_child">
				<MoviePosterContainer></MoviePosterContainer>
			</div>
		</div>
	);
};

export default LoginPage;
