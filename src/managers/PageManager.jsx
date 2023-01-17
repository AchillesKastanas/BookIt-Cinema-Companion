import React, { useState } from "react";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const PageManager = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return isLoggedIn ? <HomePage></HomePage> : <LoginPage></LoginPage>;
};

export default PageManager;
