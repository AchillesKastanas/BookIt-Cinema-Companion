import React, { useState, useEffect } from "react";
import InputContainer from "../components/page_components/login_page/InputContainer";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import classes from "./ReservationsPage.module.css";

const ReservationsPage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5556/getAllMovies", {
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
						setMovies(data);
						console.log("Movies: ", data);
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className={classes.homeContainer}>
			<p className={classes.titleBig}>My Reservations</p>
			{movies.map((movie, index) => (
				<ColoredContainer
					key={index}
					className="colored_container__blue__movie_details"
				>
					<div className={classes.movieDetails}>
						<div className={classes.movieDetailsPoster}>
							<MoviePoster
								picUrl={movie.movie_image_link}
								className="moviePosterSmall"
							></MoviePoster>
						</div>
						<div className={classes.movieDetailsTitle}>
							<p className={classes.movieDetailsTitleBig}>
								{movie.movieName}
							</p>
							<p className={classes.movieDetailsTitleSmall}>
								{movie.movie_description}
							</p>
						</div>
						<div className={classes.movieDetailsButton}>
							{/* Randomly generate a button that is either clickable or not for each movie !! Dummy data*/}
							{Math.random() < 0.5 ? (
								<Button
									className="green_button"
									value="Watch now"
								/>
							) : (
								<Button
									className="unclickable_button"
									value="Out of time"
								/>
							)}
						</div>
					</div>
				</ColoredContainer>
			))}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default ReservationsPage;
