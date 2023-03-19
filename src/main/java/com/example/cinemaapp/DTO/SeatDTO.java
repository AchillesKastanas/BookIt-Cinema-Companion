package com.example.cinemaapp.DTO;

import com.example.cinemaapp.Model.SeatStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class SeatDTO {

    private Integer seatId;
    private String seatNumber;
    private SeatStatus status;
    private double price;
    private LocalDate seatDate;
    private Integer movieId;
    private String movieName;
    private List<String> seatNames;

    public SeatDTO(Integer seatId, String seatNumber, SeatStatus status, double price, LocalDate seatDate, Integer movieId, String movieName, List<String> seatNames) {
        this.seatId = seatId;
        this.seatNumber = seatNumber;
        this.status = status;
        this.price = price;
        this.seatDate = seatDate;
        this.movieId = movieId;
        this.movieName = movieName;
        this.seatNames = seatNames;
    }
}

