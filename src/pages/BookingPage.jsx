import React from "react";

import classes from "./BookingPage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import Calendar from "short-react-calendar";

const BookingPage = () => {
	return (
		<div className={classes.reserveContainer}>
		    <ColoredContainer className="colored_container__blue__reserve_side">
				<p className={classes.titleBig}>Select a Date</p>
				<br/><br/>
				<Calendar className={classes.calendar} oneWeekCalendar={false}></Calendar>
			</ColoredContainer>
		    <ColoredContainer className="colored_container__blue__reserve_center">
			</ColoredContainer>
		    <ColoredContainer className="colored_container__blue__reserve_side"></ColoredContainer>
		</div>
	);
};

export default BookingPage;
