import React, { useState, useEffect } from "react";

import classes from "./BookingPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import Calendar from "short-react-calendar";
import SeatGrid from "../components/page_components/reserve_page/SeatGrid";

const BookingPage = () => {
	const [data, setData] = useState([]);
	const [movieName, setMovieName] = useState("");
	const [selectedRoom, setSelectedRoom] = useState(0);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showHistory, setShowHistory] = useState(false);

	useEffect(() => {
		// When the selectedSeats updates, update the cart
		//console.log("useEffect", selectedSeats);
	}, [selectedSeats]);

	//Manage requests based on date + manage ui
	useEffect(() => {
		//Clear any on-screen data
		setSelectedSeats([]);
		// When selectedDate updates
		const today = new Date();
		//Check if the selected date is today
		if (selectedDate <= today) {
			if (selectedDate.getDate() === today.getDate()) {
				setShowHistory(false);
			} else {
				setShowHistory(true);
			}
		} else {
			setShowHistory(false);
		}
	}, [selectedDate]);

	const addToSelectedSeats = (seatData) => {
		!selectedSeats.includes(seatData) &&
			setSelectedSeats([...selectedSeats, seatData]);
	};

	const removeFromSelectedSeats = (seatData) => {
		setSelectedSeats(selectedSeats.filter((seat) => seat !== seatData));
	};

	useEffect(() => {
		// Fetch or load the data here
		const resData = {
			movie: {
				title: "Avatar 2",
			},
			rooms: [
				{
					roomId: 1,
					seats: [
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
					],
					users: [
						{ name: "Maik" },
						{ name: "Vag" },
						{ name: "Axil" },
					],
				},
				{
					roomId: 2,
					seats: [
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
						{ isReserved: true },
						{ isReserved: false },
					],
					users: [
						{ name: "AllosMaik" },
						{ name: "AllosVag" },
						{ name: "AllosAxil" },
					],
				},
			],
		};

		setData(resData.rooms);
		setMovieName(resData.movie.title);
		// setSelectedRoom(resData.rooms[0]);
	}, []);

	//Check if date is older than today. Compare only the date, not the time
	const checkDate = (date) => {
		setSelectedDate(date);
	};

	return (
		<div className={classes.generalContainer}>
			<p className={classes.titleBig}>{movieName}</p>
			<div className={classes.reserveContainer}>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<div className={classes.verticalContainer}>
						<p className={classes.titleBig}>Select a Date</p>
						<br />
						<br />
						<Calendar
							className={classes.calendar}
							value={selectedDate}
							oneWeekCalendar={false}
							onChange={checkDate}
						></Calendar>
					</div>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_center">
					<div className={classes.verticalContainer}>
						{!showHistory ? (
							<>
								<p className={classes.titleBig}>
									Where would you like to sit?
								</p>
								<br />
								<br />
								<div className={classes.horizontalContainer}>
									{/* Foreach room in resData create a button that loads the corresponding room*/}
									{data &&
										data.map((room, index) =>
											index === selectedRoom ? (
												<Button
													key={index}
													value={`Room ${index + 1}`}
													className="roomButtonActive"
													onClick={() => {
														setSelectedRoom(index);
													}}
												/>
											) : (
												<Button
													key={index}
													value={`Room ${index + 1}`}
													className="roomButton"
													onClick={() => {
														setSelectedRoom(index);
													}}
												/>
											)
										)}
								</div>
								<p className={classes.titleBig}>
									Available seats:
								</p>
								<div
									className={
										classes.horizontalContainerCentered
									}
								>
									<SeatGrid
										room={
											typeof data[selectedRoom] !==
												"undefined" &&
											data[selectedRoom]
										}
										addToSelectedSeats={addToSelectedSeats}
									/>
								</div>
							</>
						) : (
							<>
								<p className={classes.titleBig}>
									Reservations History
								</p>
								<br />
								<br />
								<div className={classes.horizontalContainer}>
									{/* Foreach room in resData create a button that loads the corresponding room*/}
									{data &&
										data.map((room, index) =>
											index === selectedRoom ? (
												<Button
													key={index}
													value={`Room ${index + 1}`}
													className="roomButtonActive"
													onClick={() => {
														setSelectedRoom(index);
													}}
												/>
											) : (
												<Button
													key={index}
													value={`Room ${index + 1}`}
													className="roomButton"
													onClick={() => {
														setSelectedRoom(index);
													}}
												/>
											)
										)}
								</div>
								<p className={classes.titleBig}>
									Available seats:
								</p>
								<div
									className={
										classes.horizontalContainerCentered
									}
								>
									<SeatGrid
										room={
											typeof data[selectedRoom] !==
												"undefined" &&
											data[selectedRoom]
										}
									/>
								</div>
							</>
						)}
					</div>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<div className={classes.verticalContainer}>
						{!showHistory ? (
							<>
								<p className={classes.titleBig}>Your Cart</p>
								<br />
								<div className={classes.cartItems}>
									{selectedSeats
										.slice(0)
										.reverse()
										.map((seatData, index) => {
											return (
												<ColoredContainer
													key={index}
													className="colored_container__light_blue"
												>
													<p
														className={
															classes.titleMid
														}
													>
														Room: {seatData[0]}
													</p>
													<p
														className={
															classes.titleSmall
														}
													>
														Seat: {seatData[1]} -
														Cost: 15$
													</p>
													<Button
														value="Remove"
														className="removeButton"
														onClick={() => {
															removeFromSelectedSeats(
																seatData
															);
														}}
													/>
												</ColoredContainer>
											);
										})}
								</div>
								{selectedSeats.length !== 0 && (
									<Button
										value="Order Now"
										className="orderButton"
									/>
								)}
							</>
						) : (
							<>
								<p className={classes.titleBig}>
									Visitor History
								</p>
								<br />
								<div className={classes.userHistory}>
									{data[selectedRoom].users.map(
										(userData, index) => {
											return (
												<ColoredContainer
													key={index}
													className="colored_container__light_blue_2"
												>
													<div
														className={
															classes.profileContainer
														}
													>
														<div
															className={
																classes.userProfile
															}
														></div>
													</div>
													<br></br>
													<p
														className={
															classes.titleSmall_Users
														}
													>
														{userData.name}
													</p>
												</ColoredContainer>
											);
										}
									)}
								</div>
							</>
						)}
					</div>
				</ColoredContainer>
			</div>
		</div>
	);
};

export default BookingPage;
