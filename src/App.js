import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthManager from "./managers/PageManager";
import HomePage from "./pages/HomePage";

//If the link is something else than /login or /register check if user is looged in, in AuthManager
const router = createBrowserRouter([
	{
		path: "home",
		element: <AuthManager />,
	},
	{
		path: "register",
		element: <RegisterPage />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
]);

function App() {
	return (
		<div className="main_container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
