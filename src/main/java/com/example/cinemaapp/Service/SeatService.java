package com.example.cinemaapp.Service;
import com.example.cinemaapp.Model.Seat;

import java.time.LocalDate;
import java.util.List;

public interface SeatService {
    public Seat addSeat(Seat seat) throws Exception;

    public List<Seat> viewSeatList() throws Exception;

    public Seat updateSeat(Seat seat);

    public Seat bookSeat(Seat seat);

    public Seat cancelSeatBooking(Seat seat);

    public List<Seat> showAllSeats(String dateString) throws Exception;

    public List<Seat> showAllSeatsByDateAndRoom(String date,Integer roomId) throws Exception;
    public List<Seat> showAllSeatsByDateAndMovieId(String date,Integer movieId) throws  Exception;

}
