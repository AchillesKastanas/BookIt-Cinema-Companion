package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.Model.*;
import com.example.cinemaapp.Repository.*;
import com.example.cinemaapp.Service.MovieService;
import com.example.cinemaapp.Service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/**
 *     POST /seat/add: Creates a new seat by invoking the addSeat method of the SeatService.
 *     The seat details are passed in the request body as a Seat object.
 *
 *     GET /findall: Returns a list of all seats by invoking the viewSeatList method of the SeatService.
 *
 *     GET /findByDate/{date}: Returns a list of seats for a given date by invoking the showAllSeats method of the SeatService.
 *     The date is passed as a query parameter.
 *
 *     GET /findByDate/{date}/{roomId}: Returns a list of seats for a given date and room ID by invoking the showAllSeatsByDateAndRoom
 *     method of the SeatService. The date and room ID are passed as query parameters.
 *
 *     GET /findByMovieIdAndDate/{movieId}/{date}: Returns a list of seats for a given movie ID and date by invoking the
 *     showAllSeatsByDateAndMovieId method of the SeatService. The movie ID and date are passed as path variables.
 *
 *     PUT /updateSeat: Updates a seat by invoking the updateSeat method of the SeatService. The updated seat details are
 *     passed in the request body as a Seat object.
 *
 *     PUT /bookSeat: Books a seat by invoking the bookSeat method of the SeatService. The seat details are passed in
 *     the request body as a Seat object.
 *
 *     PUT /cancelSeat: Cancels a seat booking by invoking the cancelSeatBooking method of the SeatService.
 *     The seat details are passed in the request body as a Seat object.
 */
@RestController
public class SeatController {

    @Autowired
    SeatService seatService;

    @Autowired
    SeatRepo seatRepo;


    @Autowired
    MoviesRepo moviesRepo;

    @PostMapping("/seat/add")
    public ResponseEntity<Seat> addASeat(@RequestBody Seat seat) throws Exception{
        seat = seatService.addSeat(seat);
        return ResponseEntity.ok(seat);
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Seat>> viewSeatList() throws Exception {
        return ResponseEntity.ok(seatService.viewSeatList());
    }
    @GetMapping("/findByDate/{date}")
    public ResponseEntity<List<Seat>> viewAllSeatsByDate(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            String date) throws Exception {
        return ResponseEntity.ok(seatService.showAllSeats(date));
    }

    @GetMapping("/findByDate/{date}/{roomId}")
    public ResponseEntity<List<Seat>> viewAllSeatsByDateAndRoomId(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            String date, @RequestParam("roomId") Integer roomId) throws Exception {
        return ResponseEntity.ok(seatService.showAllSeatsByDateAndRoom(date,roomId));
    }


    @GetMapping("/findByMovieIdAndDate/{movieId}/{date}")
    public ResponseEntity<List<Seat>> viewAllSeatsByMovieIdAndDate(
            @PathVariable("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
                    String date, @PathVariable("movieId") Integer movieId) throws Exception {
        return ResponseEntity.ok(seatService.showAllSeatsByDateAndMovieId(date,movieId));
    }

    @PutMapping("/updateSeat")
    public ResponseEntity<Seat> updateSeat(@RequestBody Seat seat) throws Exception {
        ResponseEntity<Seat> response = null;
        if (seat == null) {
            response = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            seat = seatService.updateSeat(seat);
            response = new ResponseEntity<>(seat, HttpStatus.OK);
        }
        return response;
    }

    @PutMapping("/bookSeat")
    public ResponseEntity<Seat> BookASeat(@RequestBody Seat seat)throws Exception {
        seat = seatService.bookSeat(seat);
        return ResponseEntity.ok(seat);
    }

    @PutMapping("/cancelSeat")
    public ResponseEntity<Seat> CancelASeat(@RequestBody Seat seat) throws Exception {
        seat = seatService.cancelSeatBooking(seat);
        return ResponseEntity.ok(seat);
    }
}
