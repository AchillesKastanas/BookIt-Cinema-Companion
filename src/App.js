import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthManager from "./managers/AuthManager";
import HomePage from "./pages/HomePage";
import ReservationsPage from "./pages/ReservationsPage";
import BookingPage from "./pages/BookingPage";

//If the link is something else than /login or /register check if user is logged in, in AuthManager
const router = createBrowserRouter([
	{
		path: "home",
		element: (
			<AuthManager>
				<HomePage />
			</AuthManager>
		),
	},
	{
		path: "reservations",
		element: (
			<AuthManager>
				<ReservationsPage />
			</AuthManager>
		),
	},
	{
		path: "reserve/:id",
		element: (
			<AuthManager>
				<BookingPage />
			</AuthManager>
		),
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
