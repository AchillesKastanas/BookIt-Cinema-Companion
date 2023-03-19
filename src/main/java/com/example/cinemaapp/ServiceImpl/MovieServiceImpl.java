package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Model.Movie;
import com.example.cinemaapp.Model.Show;
import com.example.cinemaapp.Repository.MoviesRepo;
import com.example.cinemaapp.Service.MovieService;
import com.example.cinemaapp.Service.ShowRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


/**
 * The class contains methods to accept and retrieve movie details, update movie details,
 * get a movie by its ID, get all movie details, and add a movie to a show.
 *
 * The acceptMovieDetails method accepts a Movie object and saves it to the database using the MoviesRepo.
 *
 * The getMovieDetails method retrieves the Movie object with the given ID from the database using the MoviesRepo.
 * If the movie is not found, it throws an Exception.
 *
 * The updateMovieDetails method updates the Movie object with the given ID in the database using the MoviesRepo.
 * It first calls the getMovieDetails method to retrieve the movie,
 * updates its attributes using the new Movie object, and then saves it to the database.
 *
 * The getMovieById method retrieves the Movie object with the given ID from the database using the MoviesRepo.
 * If the movie is not found, it throws a ResponseStatusException with a NOT_FOUND HTTP status.
 *
 * The getAllMoviesDetails method retrieves all Movie objects from the database using the MoviesRepo.
 *
 * The addMovieToShow method adds a Movie object to a Show object and saves both to the database using the MoviesRepo and ShowRepo, respectively.
 * It first retrieves the Show object with the given showId using the ShowRepo and sets it to the Movie object's show attribute.
 * It then saves the Movie object to the database using the MoviesRepo and returns the updated Movie object.
 */
@Service
public class MovieServiceImpl  implements MovieService {


    @Autowired
    private MoviesRepo moviesRepo;
    @Autowired
    private ShowRepo showRepo;

    @Override
    public Movie acceptMovieDetails(Movie movie) {
        return moviesRepo.save(movie);
    }

    @Override
    public Movie getMovieDetails(int id) throws Exception {
        return moviesRepo.findById(id).orElseThrow(() -> new Exception("Movie not found for id: " + id));
    }

    @Override
    public Movie updateMovieDetails(int id, Movie movie) throws Exception {
        Movie savedMovie = getMovieDetails(id);
        return moviesRepo.save(savedMovie);
    }

    public Movie getMovieById(Integer id) {
        return moviesRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found."));
    }

    @Override
    public List<Movie> getAllMoviesDetails() {
        return moviesRepo.findAll();
    }

    @Override
    public Movie addMovieToShow(Movie movie, Integer showId) throws Exception {
        Show show=new Show();
        if (showId != null) {
            show = showRepo.getOne(showId);
            movie.setShow(show);
        }
        moviesRepo.saveAndFlush(movie);
        return moviesRepo.getOne(movie.getMovieId());
    }
}
