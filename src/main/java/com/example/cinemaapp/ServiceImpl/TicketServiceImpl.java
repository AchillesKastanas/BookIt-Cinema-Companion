package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Model.Booking;
import com.example.cinemaapp.Model.Tickets;
import com.example.cinemaapp.Repository.BookingRepo;
import com.example.cinemaapp.Repository.TicketsRepo;
import com.example.cinemaapp.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 *     addTicket: Adds a new ticket to the system, associated with a given booking ID. If the booking ID is provided,
 *     it fetches the associated booking from the database and updates its transaction status to "Completed".
 *     Then, it saves the new ticket to the database and returns it.
 *
 *     updateTicket: Updates an existing ticket in the database with the given ticket object and returns it.
 *     removeTicket: Deletes an existing ticket from the database and returns it.
 *     viewAllTickets: Returns a list of all tickets in the system.
 *     viewTicket: Returns a single ticket with the given ID.
 *     viewTicketMovieRoomSeats: This method is currently empty and doesn't do anything.
 */
@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketsRepo ticketsRepo;

    @Autowired
    BookingRepo bookingRepo;

    @Override
    public Tickets addTicket(Tickets ticket,Integer bookingId) {
        Booking booking=new Booking();
        if(bookingId!=null) {
            booking=bookingRepo.findById(bookingId).get();
            booking.setTransactionStatus("Completed");
            ticket.setBooking(booking);
        }
        ticketsRepo.saveAndFlush(ticket);
        return ticket;
    }

    @Override
    public Tickets updateTicket(Tickets ticket) {
        return ticketsRepo.save(ticket);
    }

    @Override
    public Tickets removeTicket(Tickets ticket) {
        ticketsRepo.delete(ticket);
        return ticket;
    }

    @Override
    public List<Tickets> viewAllTickets() {
        return ticketsRepo.findAll();
    }

    @Override
    public Tickets viewTicket(Integer id) {
        return ticketsRepo.findById(id).get();
    }

    @Override
    public Tickets viewTicketMovieRoomSeats(Tickets tickets) {
       // ticketsRepo.
        return null;
    }
}