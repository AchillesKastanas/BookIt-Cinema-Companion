import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./BookingPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import Calendar from "short-react-calendar";
import SeatGrid from "../components/page_components/reserve_page/SeatGrid";

const BookingPage = () => {
	const [roomSeats, setRoomSeats] = useState([]);
	const [movieName, setMovieName] = useState("");
	const [selectedRoom, setSelectedRoom] = useState(0);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showHistory, setShowHistory] = useState(false);
	//Get the movieId from the url
	const { id } = useParams();

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
		console.log("useEffect of selectedDate: ", selectedDate);
		// Convert selectedDate to a string with format "yyyy-mm-dd" in a greek timezone
		const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			timeZone: "Europe/Athens",
		};
		const greekDate = selectedDate.toLocaleDateString("el-GR", options);
		// format as yyyy-mm-dd
		const date = greekDate.split("/").reverse().join("-");

		// Fetch or load the data here
		fetch("http://localhost:5556/findByMovieIdAndDate/" + id + "/" + date, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status !== 200) {
					response.json().then((data) => {
						alert(
							"Details: " +
								data.details +
								"\nMessage: " +
								data.message
						);
					});
					throw Error(response.statusText);
				} else {
					response.json().then((data) => {
						const seats = data.sort(
							(a, b) => a.seatNumber - b.seatNumber
						);
						const room1 = [];
						const room2 = [];
						seats.forEach((seat, index) => {
							if (index % 2 === 0) {
								room1.push(seat);
							} else {
								room2.push(seat);
							}
						});
						setRoomSeats([room1, room2]);
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});

		//setData(resData.rooms);
		//setMovieName(resData.movie.title);
		// setSelectedRoom(resData.rooms[0]);
	}, [selectedDate]);

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
									<div>
										<Button
											value="Room 1"
											className={
												selectedRoom === 0
													? "roomButtonActive"
													: "roomButton"
											}
											onClick={() => setSelectedRoom(0)}
										/>
										<Button
											value="Room 2"
											className={
												selectedRoom === 1
													? "roomButtonActive"
													: "roomButton"
											}
											onClick={() => setSelectedRoom(1)}
										/>
									</div>
								</div>
								<span className={classes.titleBig}>
									Available seats:
								</span>
								<div
									className={
										classes.horizontalContainerCentered
									}
								>
									<SeatGrid
										room={
											typeof roomSeats[selectedRoom] !==
												"undefined" &&
											//! INSERT THE 30 SEATS HERE
											roomSeats[selectedRoom]
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
									<button
										value="Room 1"
										className={
											selectedRoom === 0
												? "roomButtonActive"
												: "roomButton"
										}
										onClick={() => setSelectedRoom(0)}
									>
										Room 1
									</button>
									<button
										value="Room 2"
										className={
											selectedRoom === 1
												? "roomButtonActive"
												: "roomButton"
										}
										onClick={() => setSelectedRoom(1)}
									>
										Room 2
									</button>
								</div>
								<span className={classes.titleBig}>
									Available seats:
								</span>
								<div
									className={
										classes.horizontalContainerCentered
									}
								>
									<SeatGrid
										room={
											typeof roomSeats[selectedRoom] !==
												"undefined" &&
											//! INSERT THE 30 SEATS HERE
											roomSeats[selectedRoom]
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
									//TODO: SETUP THE USER HISTORY
									{/* {data[selectedRoom].users.map(
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
									)} */}
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
