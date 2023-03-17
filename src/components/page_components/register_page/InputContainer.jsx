import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./InputContainer.module.css";
import InputField from "../../general/InputField";
import Button from "../../general/Button";

const InputContainer = () => {
	const [username, setUsername] = useState("achilles");
	const [password, setPassword] = useState("Achilles123");
	const [email, setEmail] = useState("achilleasrinos@gmail.com");
	const [phone, setPhone] = useState("1234567890");
	const isFormValid = (username && password && email && phone) !== "";
	console.log(isFormValid);
	const navigate = useNavigate();

	function handleClick() {
		navigate("/login");
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isFormValid) {
			return;
		}

		const formData = {
			username,
			mobile_number: phone,
			password,
			email
		};

		fetch("http://localhost:5556/customers/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			//If response is not 200, throw an error
			.then((response) => {
				if (response.status !== 201) {
					response.json().then((data) => {
						alert(
							"Details: " +
								data.details +
								"\nMessage: " +
								data.message
						);
					});
					throw Error(response.statusText);
				}

				//Store the new JWT in the session storage
				sessionStorage.setItem("jwt", username);
				navigate("/home");
			})
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleUsernameChange = (event) => {
		const usernameInput = event.target;
		setUsername(usernameInput.value);
		if (!usernameInput.value) {
			usernameInput.setCustomValidity("Please enter a username");
		} else {
			usernameInput.setCustomValidity("");
		}
	};

	const handlePasswordChange = (event) => {
		const passwordInput = event.target;
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

		setPassword(passwordInput.value);
		if (!passwordRegex.test(passwordInput.value)) {
			passwordInput.setCustomValidity(
				"Password must contain 8-16 characters with at least one uppercase letter, one lowercase letter, and one number"
			);
		} else {
			passwordInput.setCustomValidity("");
		}
	};

	const handleEmailChange = (event) => {
		const emailInput = event.target;
		setEmail(emailInput.value);
		const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
		if (!regex.test(emailInput.value)) {
			emailInput.setCustomValidity("Please enter a valid email address");
		} else {
			emailInput.setCustomValidity("");
		}
	};

	const handlePhoneChange = (event) => {
		const phoneInput = event.target;
		const phoneRegex = /^[0-9]{10}$/; // regular expression for 10-digit phone number
		if (!phoneRegex.test(phoneInput.value)) {
			phoneInput.setCustomValidity(
				"Please enter a valid 10-digit phone number"
			);
		} else {
			phoneInput.setCustomValidity("");
		}
		setPhone(phoneInput.value);
	};

	return (
		<form className={classes.inputContainer} onSubmit={handleSubmit}>
			<div className={classes.inputContainerTop}>
				<InputField
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
				/>
				<InputField
					placeholder="Password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<InputField
					placeholder="Email"
					type="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<InputField
					placeholder="Phone Number"
					type="tel"
					value={phone}
					onChange={handlePhoneChange}
				/>
			</div>
			<div className={classes.inputContainerBottom}>
				<Button
					value="Register"
					className="red_button"
					disabled={!isFormValid}
				/>
				<Button value="Back to Login" onClick={handleClick} />
			</div>
		</form>
	);
};

export default InputContainer;
