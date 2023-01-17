import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PageManager from "./managers/PageManager";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageManager />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/login",
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
