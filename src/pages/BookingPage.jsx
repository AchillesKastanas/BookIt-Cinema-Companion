import React, { useState, useEffect } from "react";

import classes from "./BookingPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import Calendar from "short-react-calendar";
import SeatGrid from "../components/page_components/reserve_page/SeatGrid";

const BookingPage = () => {
	const [data, setData] = useState([]);
	const [selectedRoom, setSelectedRoom] = useState(0);
	const [selectedSeats, setSelectedSeats] = useState([]);

	useEffect(() => {
		// When the selectedSeats updates, update the cart
		console.log("useEffect", selectedSeats);
	}, [selectedSeats]);

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
				},
			],
		};

		setData(resData.rooms);
		// setSelectedRoom(resData.rooms[0]);
	}, []);

	return (
		<div className={classes.generalContainer}>
			<p className={classes.titleBig}>[movie_title]</p>
			<div className={classes.reserveContainer}>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<div className={classes.verticalContainer}>
						<p className={classes.titleBig}>Select a Date</p>
						<br />
						<br />
						<Calendar
							className={classes.calendar}
							oneWeekCalendar={false}
						></Calendar>
					</div>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_center">
					<div className={classes.verticalContainer}>
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
						<p className={classes.titleBig}>Available seats:</p>
						<div className={classes.horizontalContainerCentered}>
							<SeatGrid
								room={
									typeof data[selectedRoom] !== "undefined" &&
									data[selectedRoom]
								}
								addToSelectedSeats={addToSelectedSeats}
							/>
						</div>
					</div>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<div className={classes.verticalContainer}>
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
											<p className={classes.titleMid}>
												Room: {seatData[0]}
											</p>
											<p className={classes.titleSmall}>
												Seat: {seatData[1]} - Cost: 15$
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
							<Button value="Order Now" className="orderButton" />
						)}
					</div>
				</ColoredContainer>
			</div>
		</div>
	);
};

export default BookingPage;
