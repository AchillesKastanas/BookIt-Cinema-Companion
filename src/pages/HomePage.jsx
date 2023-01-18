import React from "react";

import classes from "./HomePage.module.css";
import ColoredContainer from "../components/general/ColoredContainer";
import MoviePoster from "../components/general/MoviePoster";
import Button from "../components/general/Button";

const HomePage = () => {
	return (
		<div className={classes.homeContainer}>
			<p className={classes.titleBig}>Welcome back [username]</p>
			<p className={classes.titleSmall}>See whats currently playing</p>
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
						<Button className="book_button" value="Book now" />
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
						<Button className="book_button" value="Book now" />
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
						<Button className="book_button" value="Book now" />
					</div>
				</div>
			</ColoredContainer>
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
