package com.example.cinemaapp.Service;

import com.example.cinemaapp.Model.Movie;
import com.example.cinemaapp.Model.Seat;

import java.util.List;

public interface MovieService {

    public Movie acceptMovieDetails(Movie movie);
    public Movie getMovieDetails(int id) throws Exception;
    public Movie updateMovieDetails(int id, Movie movie) throws Exception;
    public Movie getMovieById(Integer id) throws Exception;
    public Movie addMovieToShow(Movie movie, Integer showId) throws Exception;
    public List<Movie> getAllMoviesDetails();
}
