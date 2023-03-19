package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Model.Seat;
import com.example.cinemaapp.Model.SeatStatus;
import com.example.cinemaapp.Repository.SeatRepo;
import com.example.cinemaapp.Service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 *     addSeat: Adds a new seat to the database. Throws an exception if a seat with the same ID already exists.
 *     bookSeat: Marks a seat as booked.
 *     updateSeat: Updates an existing seat in the database.
 *     cancelSeatBooking: Marks a booked seat as cancelled.
 *     viewSeatList: Retrieves a list of all seats in the database.
 *     showAllSeats: Retrieves a list of all seats booked for a given date.
 *     showAllSeatsByDateAndRoom: Retrieves a list of all seats booked for a given date and room.
 *     showAllSeatsByDateAndMovieId: Retrieves a list of all seats booked for a given date and movie.
 */
@Service
public class SeatServiceImpl implements SeatService {


    @Autowired
    private SeatRepo seatRepo;
    @Override
    public Seat addSeat(Seat seat) throws Exception {
        if (seat != null) {
            if (seatRepo.existsById(seat.getSeatId())) {
                throw new Exception("Seat with this id already exists");
            } else {
                seatRepo.saveAndFlush(seat);
            }
        }
        return seatRepo.getOne(seat.getSeatId());
    }

    @Override
    public Seat bookSeat(Seat seat)  {
        seat.setStatus(SeatStatus.BOOKED);
        return seatRepo.saveAndFlush(seat);
    }


    @Override
    public Seat updateSeat(Seat seat) {
        return seatRepo.saveAndFlush(seat);
    }

    @Override
    public Seat cancelSeatBooking(Seat seat) {
        seat.setStatus(SeatStatus.CANCELLED);
        return seatRepo.saveAndFlush(seat);
    }

    @Override
    public List<Seat> viewSeatList() throws Exception {
        List<Seat> list = seatRepo.findAll();
        return list;
    }


    @Override
    public List<Seat> showAllSeats(String dateString) throws Exception {
        LocalDate date = LocalDate.parse(dateString);
        List<Seat> seatList = new ArrayList<>();
        for (Seat seat : seatRepo.findAll()) {
            if (seat.getDate() != null && seat.getDate().isEqual(date)) {
                seatList.add(seat);
            }
        }
        if (seatList.size() == 0)
            throw new Exception("No bookings found");
        else {
            return seatList;
        }
    }

    @Override
    public List<Seat> showAllSeatsByDateAndRoom(String dateString, Integer roomId) throws Exception {
        LocalDate date = LocalDate.parse(dateString);
        List<Seat> seatList = new ArrayList<>();
        for (Seat seat : seatRepo.findAll()) {
            if (seat.getDate() != null && seat.getDate().isEqual(date)) {
                if(seat.getRoomID().equals(roomId)){
                seatList.add(seat);
            }
            }
        }
        if (seatList.size() == 0)
            throw new Exception("No bookings found");
        else {
            return seatList;
        }
    }

    @Override
    public List<Seat> showAllSeatsByDateAndMovieId(String dateString, Integer movieId) throws Exception {
        LocalDate date = LocalDate.parse(dateString);
        List<Seat> seatList = new ArrayList<>();
        for (Seat seat : seatRepo.findAll()) {
            System.out.println("I got find all seatRepo");

            if (seat.getMovieId() != null && seat.getMovieId()==(movieId)) {
                System.out.println(movieId);
                System.out.println(seat);
                System.out.println(seat.getMovieId());
                if (seat.getDate().isEqual(date)) {
                    seatList.add(seat);
                }
            }
        }
        if (seatList.size() == 0) {
            throw new Exception("No bookings found with this date and MovieId");
        } else {
            return seatList;
        }
    }

}
