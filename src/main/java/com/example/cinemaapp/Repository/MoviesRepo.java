package com.example.cinemaapp.Repository;

import com.example.cinemaapp.Model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MoviesRepo extends JpaRepository<Movie, Integer>{
    public List<Movie> findByMovieName(String movieName);
    public Movie findMoviesByMovieId(Integer movieId);

    List<Movie> getAllByMovieDate(LocalDate date);
}