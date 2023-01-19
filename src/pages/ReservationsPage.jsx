import React from "react";
import InputContainer from "../components/page_components/login_page/InputContainer";

import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";
import classes from "./ReservationsPage.module.css";

const ReservationsPage = () => {
	return (
		<div className={classes.homeContainer}>
			<p className={classes.titleBig}>My Reservations</p>
			<ColoredContainer className="colored_container__blue__movie_details">
				<div className={classes.movieDetails}>
					<div className={classes.movieDetailsPoster}>
						<MoviePoster
							picUrl="/movie-poster.jpg"
							className="moviePosterSmall"
						></MoviePoster>
					</div>
					<div className={classes.movieDetailsTitle}>
						<p className={classes.movieDetailsTitleBig}>
							Avatar: The Way of the Water
						</p>
						<p className={classes.movieDetailsTitleSmall}>
							Jake Sully and Ney'tiri have formed a family and are
							doing everything to stay together. However, they
							must leave their home and explore the regions of
							Pandora. When an ancient threat resurfaces, Jake
							must fight a difficult war against the humans.
						</p>
					</div>
					<div className={classes.movieDetailsButton}>
						<Button className="green_button" value="Watch now" />
					</div>
				</div>
			</ColoredContainer>
			<ColoredContainer className="colored_container__blue__movie_details">
				<div className={classes.movieDetails}>
					<div className={classes.movieDetailsPoster}>
						<MoviePoster
							picUrl="/movie-poster-2.jpg"
							className="moviePosterSmall"
						></MoviePoster>
					</div>
					<div className={classes.movieDetailsTitle}>
						<p className={classes.movieDetailsTitleBig}>
							Oppenheimer
						</p>
						<p className={classes.movieDetailsTitleSmall}>
							Physicist J Robert Oppenheimer works with a team of
							scientists during the Manhattan Project, leading to
							the development of the atomic bomb.
						</p>
					</div>
					<div className={classes.movieDetailsButton}>
						<Button
							className="unclickable_button"
							value="Out of time"
						/>
					</div>
				</div>
			</ColoredContainer>
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
