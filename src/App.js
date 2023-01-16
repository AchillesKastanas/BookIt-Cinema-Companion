import React, { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="main_container">
			{isLoggedIn ? <HomePage></HomePage> : <LoginPage></LoginPage>}
		</div>
	);
}

export default App;
