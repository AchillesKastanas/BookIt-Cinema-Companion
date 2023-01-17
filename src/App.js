import React, { useState } from "react";
import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="main_container">
			{isLoggedIn ? <HomePage></HomePage> : <RegisterPage></RegisterPage>}
		</div>
	);
}

export default App;
