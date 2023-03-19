package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Model.Booking;
import com.example.cinemaapp.Repository.BookingRepo;
import com.example.cinemaapp.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * The class provides several methods for managing bookings:
 *
 * addBooking(Booking) creates a new booking by calling the save() method of
 * the injected bookingRepo instance and returns the saved booking object.
 *
 *updateBooking(Booking) updates an existing booking by calling
 *the save() method of the injected bookingRepo instance and returns the updated booking object.
 *
 *cancelBooking(Booking) cancels an existing booking by calling to delete() method of
 *the injected bookingRepo instance and returns the cancelled booking object.
 *
 *showAllBooking() retrieves all bookings by calling the findAll() method of the
 *injected bookingRepo instance and returns a list of booking objects.
 *
 *showAllBookings(LocalDate bookingdate) retrieves all bookings for a specific
 *date by iterating through all bookings retrieved from the injected bookingRepo instance and
 *adding those with a matching date to a list. If no bookings are found for the specified date, an exception is thrown.
 *
 *viewBooking(int bookingid) retrieves a specific booking by calling the findById() method of the
 *injected bookingRepo instance with the specified booking ID and returns the corresponding booking object.
 *If no booking is found with the specified ID, an exception is thrown.
 */
@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Override
    public Booking addBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public Booking updateBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public Booking cancelBooking(Booking booking) {
        bookingRepo.delete(booking);
        return booking;
    }

    @Override
    public List<Booking> showAllBooking() {
        return bookingRepo.findAll();
    }

    @Override
    public List<Booking> showAllBookings(String bookingdate) throws Exception {
        LocalDate date = LocalDate.parse(bookingdate);
        List<Booking> bkList = new ArrayList<>();
        for (Booking booking : bookingRepo.findAll()) {
            if (booking.getBookingDate() != null && booking.getBookingDate().isEqual(date)) {
                bkList.add(booking);
            }
        }
        if (bkList.size() == 0)
            throw new Exception("No bookings found");
        else {
            return bkList;
        }
    }

    @Override
    public Booking viewBooking(int bookingid) throws Exception {
        return bookingRepo.findById(bookingid).get();
    }
}
