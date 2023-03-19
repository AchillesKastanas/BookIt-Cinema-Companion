package com.example.cinemaapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int roomId;

    private int roomNum;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Seat> seats;


    @OneToMany(cascade = CascadeType.ALL)
    private List<Show> show;

    public Room(int roomId, int roomNum, List<Seat> seats, List<Show> show) {
        this.roomId = roomId;
        this.roomNum = roomNum;
        this.seats = seats;
        this.show = show;
    }

    public Room() {

    }
}
