import React from "react";

import classes from "./BookingPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import Calendar from "short-react-calendar";
import SeatGrid from "../components/page_components/reserve_page/SeatGrid";

const BookingPage = () => {
	const seats = [{isReserved: false},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: true},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true},
		{isReserved: false},
		{isReserved: false},
		{isReserved: true}];

	return (
		<div className={classes.generalContainer}>
			<p className={classes.titleBig}>[movie_title]</p>
			<div className={classes.reserveContainer}>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<p className={classes.titleBig}>Select a Date</p>
					<br/><br/>
					<Calendar className={classes.calendar} oneWeekCalendar={false}></Calendar>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_center">
					<p className={classes.titleBig}>Where would you like to sit?</p>
					<br/><br/>
					<Button value="Room 1"></Button>
					<br/><br/>
					<SeatGrid seats={seats}/>
				</ColoredContainer>
				<ColoredContainer className="colored_container__blue__reserve_side">
					<p className={classes.titleBig}>Your Cart</p>
				</ColoredContainer>
			</div>
		</div>
	);
};

export default BookingPage;
