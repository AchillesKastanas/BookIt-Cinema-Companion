package com.example.cinemaapp.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Tickets {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ticketId;

    private int noOfSeats;
    private boolean ticketStatus;

    @OneToMany
    private List<Seat> seats;
    @OneToOne
    private Booking booking;


    public Tickets(int noOfSeats, boolean ticketStatus, List<Seat> seats, Booking booking) {
        super();
        this.noOfSeats = noOfSeats;
        this.ticketStatus = ticketStatus;
        this.seats = seats;
        this.booking = booking;
    }
}
