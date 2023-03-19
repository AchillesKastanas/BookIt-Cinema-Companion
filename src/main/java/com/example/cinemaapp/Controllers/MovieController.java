package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.DTO.MovieDTO;
import com.example.cinemaapp.Model.Movie;
import com.example.cinemaapp.Model.Seat;
import com.example.cinemaapp.Model.SeatStatus;
import com.example.cinemaapp.Service.MovieService;
import com.example.cinemaapp.Service.SeatService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *getAllMovies: A GET endpoint that returns a list of all movies in the system in JSON format.
 *
 *addNewMovie: A POST endpoint that accepts a JSON payload containing movie details and a date,
 * and adds the movie to the system. It also adds 60 seats (30 seats for each of two rooms) for
 * the movie and returns the added movie details and the seats in JSON format.
 *
 *addToShow: A POST endpoint that accepts a JSON payload containing
 * movie details and a show ID, and adds the movie to the specified show.
 *
 *updateMovieDetails: A PUT endpoint that accepts a movie ID and a JSON payload
 * containing updated movie details, and updates the movie details in the system.
 * It returns the updated movie details in JSON format.
 */

@RestController
public class MovieController {
    @Autowired
    private MovieService movieService;
    @Autowired
    ModelMapper modelmapper;

    @Autowired
    private SeatService seatService;


    @GetMapping(value="/getAllMovies",produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllMovies() {
        List<Movie> movieList = movieService.getAllMoviesDetails();
        List<MovieDTO> movieDTOList = new ArrayList<>();
        for(Movie movie : movieList){
            movieDTOList.add(modelmapper.map(movie, MovieDTO.class));
        }
        return new ResponseEntity<>(movieDTOList, HttpStatus.OK);
    }

    @PostMapping(value="/addMovie/add", consumes=MediaType.APPLICATION_JSON_VALUE, headers="Accept=application/json")
    public ResponseEntity addNewMovie(@RequestBody Movie movie, LocalDate date) throws Exception {
        List<Seat> seats = new ArrayList<>();
        for (int day = 1; day <= date.lengthOfMonth(); day++) {
            LocalDate customDate = LocalDate.of(date.getYear(), date.getMonth(), day);
            for (int roomId = 1; roomId < 3; roomId++) {
                for (int i = 0; i < 30; i++) {
                    Seat seat = new Seat();
                    seat.setStatus(SeatStatus.AVAILABLE);
                    seat.setMovieId(movie.getMovieId());
                    seat.setSeatNumber(String.valueOf(i+1));
                    seat.setPrice(10.0);
                    seat.setDate(customDate);
                    seat.setRoomID(roomId);
                    Seat addseat = seatService.addSeat(seat);
                    seats.add(addseat);
                }
            }
        }
        Movie addMovie = movieService.acceptMovieDetails(movie);
        Map<String, Object> response = new HashMap<>();
        response.put("seats", seats);
        response.put("movie", addMovie);
        return ResponseEntity.ok(response);
    }

    @PutMapping(value="/updateMovie/{id}",consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateMovieDetails(@PathVariable(name = "id") int id, @RequestParam MovieDTO movieDTO) throws Exception{
        Movie newMovie = modelmapper.map(movieDTO, Movie.class);
        Movie updatedMovie = movieService.updateMovieDetails(id, newMovie);
        MovieDTO updatedMovieDTO = modelmapper.map(updatedMovie, MovieDTO.class);
        return ResponseEntity.ok(updatedMovieDTO);
    }
}
