import React, { useState, useEffect } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthManager from "./managers/AuthManager";
import HomePage from "./pages/HomePage";
import ReservationsPage from "./pages/ReservationsPage";
import BookingPage from "./pages/BookingPage";
import HandleOAuth2Callback from "./managers/HandleOAuth2Callback";

//If the link is something else than /login or /register check if user is logged in, in AuthManager
const router = createBrowserRouter([
	{
		path: "*",
		element: <Navigate to="/login" />,
	},
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
	{
		path: "/oauth2/callback",
		element: (
			<HandleOAuth2Callback
				code={new URLSearchParams(window.location.search).get("code")}
				scope={new URLSearchParams(window.location.search).get("scope")}
				authuser={new URLSearchParams(window.location.search).get(
					"authuser"
				)}
				prompt={new URLSearchParams(window.location.search).get(
					"prompt"
				)}
			/>
		),
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
