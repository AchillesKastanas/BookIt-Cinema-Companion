package com.example.cinemaapp.Controllers;


import com.example.cinemaapp.Model.Seat;
import com.example.cinemaapp.Model.Tickets;
import com.example.cinemaapp.Repository.SeatRepo;
import com.example.cinemaapp.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *     getAllTickets(): retrieves all tickets in the system
 *     addATicket(): creates a new ticket and optionally associates it with a booking
 *     updateTicket(): updates an existing ticket
 *     deleteTicket(): deletes a ticket
 *     addSeat(): adds a seat to a ticket identified by its ID
 *     removeSeat(): removes a seat from a ticket identified by its ID
 */

@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;
    @Autowired
    private SeatRepo seatRepo;

    @GetMapping("/getAllTickets")
    public ResponseEntity<List<Tickets>> getAllTickets(){
        return ResponseEntity.ok(ticketService.viewAllTickets());
    }

    @PostMapping("/addTicker")
    public ResponseEntity<Tickets> addATicket(@RequestBody Tickets ticket,@RequestParam(required = false) Integer bookingId)
            throws Exception {

        ticket = ticketService.addTicket(ticket,bookingId);
        return ResponseEntity.ok(ticket);
    }

    @PutMapping("/updateTicket")
    public Tickets updateTicket(@RequestBody Tickets ticket){
        return ticketService.updateTicket(ticket);
    }

    @DeleteMapping("/deleteTicket")
    public Tickets deleteTicket(@RequestBody Tickets ticket){
        return ticketService.removeTicket(ticket);
    }

    @PostMapping("/ticket/{id}/addSeat")
    public Tickets addSeat(@PathVariable("id") Integer id, @RequestBody Seat seat){
        Tickets tickets= ticketService.viewTicket(id);
        addSeat(id, seat);
        seatRepo.save(seat);
        return tickets;
    }

    @DeleteMapping("/ticket/{id}/removeSeat")
    public Tickets removeSeat(@PathVariable("id") Integer id, @RequestBody Seat seat){
        Tickets tickets = ticketService.viewTicket(id);
        deleteTicket(tickets);
        seatRepo.delete(seat);
        return tickets;
    }
}
