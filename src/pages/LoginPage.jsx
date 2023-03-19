import React from "react";
import InputContainer from "../components/page_components/login_page/InputContainer";

import classes from "./LoginPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";

const LoginPage = () => {
	return (
		<div className={classes.loginContainer}>
			<div className={classes.leftChild}>
				<p className={classes.leftP}>The Latest Movies</p>
				<ColoredContainer
					picUrl="https://i.pinimg.com/736x/91/1a/2d/911a2db55ff3a1faa44a7e766b9a1b3e.jpg"
					className={"colored_container__red"}
				></ColoredContainer>
			</div>
			<InputContainer></InputContainer>
			<div className={classes.rightChild}>
				<ColoredContainer
					picUrl="https://pyxis.nymag.com/v1/imgs/e07/c0f/8ecdc0f7e74ee9f3b9317ef7978942b3c3-creed.jpg"
					className={"colored_container__blue"}
				></ColoredContainer>
				<p>All In One Place</p>
			</div>
		</div>
	);
};

export default LoginPage;
