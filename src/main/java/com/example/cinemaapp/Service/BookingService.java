package com.example.cinemaapp.Service;
import com.example.cinemaapp.Model.Booking;

import java.time.LocalDate;
import java.util.List;

public interface BookingService {
    Booking addBooking(Booking booking);
    Booking updateBooking(Booking booking);
    Booking cancelBooking(Booking booking);
    List<Booking> showAllBooking();
    public List<Booking> showAllBookings(String bookingdate) throws Exception;
    public Booking viewBooking(int bookingid) throws Exception;
}
