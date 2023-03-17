import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./HomePage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:5556/movies", {
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
						console.log(movies);
					});
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	function handleMovieClick(movieId) {
		navigate(`/reserve/${movieId}`);
	}

	return (
		<div className={classes.homeContainer}>
			<p className={classes.titleBig}>
				Welcome back {sessionStorage.getItem("jwt")}
			</p>
			<p className={classes.titleSmall}>See what's currently playing</p>
			{movies.map((movie, index) => (
				<ColoredContainer
					key={movie.movie_id}
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
							<Button
								className="book_button"
								value="Book now"
								onClick={() => handleMovieClick(movie.movie_id)}
							/>
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
			<br />
		</div>
	);
};

export default HomePage;
