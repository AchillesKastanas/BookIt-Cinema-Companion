package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.Model.Booking;
import com.example.cinemaapp.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


/**
 *This is a Spring Boot controller class that provides REST endpoints for managing bookings.
 *It uses dependency injection to inject a BookingService instance and defines four methods:
 *getAllBookings: retrieves all existing bookings via a GET request to "/bookings".
 *addBooking: creates a new booking via a POST request to "/booking" and returns the created booking.
 *updateBooking: updates an existing booking via a PUT request to "/booking" and returns the updated booking.
 *deleteBooking: cancels an existing booking via a DELETE request to "/booking" and returns the cancelled booking.
 * All endpoints expect and return JSON data in the Booking format.
 */

@RestController
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/getAllBookings")
    public ResponseEntity<List<Booking>> getAllBookings(){
        return ResponseEntity.ok(bookingService.showAllBooking());
    }

    @PostMapping("/addBooking")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking){
        return ResponseEntity.ok(bookingService.addBooking(booking));
    }

    @GetMapping("/viewBooking/{bookingId}")
    public ResponseEntity<Booking> viewBooking(@PathVariable int bookingId)
            throws Exception {
        ResponseEntity<Booking> response = null;
        try {
            Booking booking = bookingService.viewBooking(bookingId);
            response = new ResponseEntity<>(booking, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return response;
    }

    @GetMapping("/byDate/{date}")
    public ResponseEntity<List<Booking>> viewMovieByLocalDate(
            @RequestParam("bookingDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String date)
            throws Exception {
        return ResponseEntity.ok(bookingService.showAllBookings(date));
    }

    @PutMapping("/updateBooking")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking){
        return ResponseEntity.ok(bookingService.updateBooking(booking));
    }

    @DeleteMapping("/deleteBooking")
    public ResponseEntity<Booking> deleteBooking(@RequestBody Booking booking){
        return ResponseEntity.ok(bookingService.cancelBooking(booking));
    }
}
