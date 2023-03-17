import React from "react";
import InputContainer from "../components/page_components/register_page/InputContainer";

import classes from "./RegisterPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";

const RegisterPage = () => {
	return (
		<div className={classes.registerContainer}>
			<div className={classes.leftChild}>
				<p className={classes.leftP}>The Latest Movies</p>
				<ColoredContainer
					picUrl="/movie-poster.jpg"
					className={"colored_container__red"}
				></ColoredContainer>
			</div>
			<InputContainer></InputContainer>
			<div className={classes.rightChild}>
				<ColoredContainer
					picUrl="/movie-poster-2.jpg"
					className={"colored_container__blue"}
				></ColoredContainer>
				<p>All In One Place</p>
			</div>
		</div>
	);
};

export default RegisterPage;
