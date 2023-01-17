import React, { useState } from "react";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RootPage from "../pages/RootPage";

const PageManager = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return isLoggedIn ? <RootPage></RootPage> : <RootPage></RootPage>;
};

export default PageManager;
