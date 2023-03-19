package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.Model.Room;
import com.example.cinemaapp.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomsController {
    @Autowired
    private RoomService roomService;

    @PostMapping("/add")
    public ResponseEntity<Room> addTheatre(@RequestBody Room room)
            throws Exception {
        return new ResponseEntity<>(roomService.addRoom(room), HttpStatus.CREATED);
    }

    @GetMapping("/findbyMovie/{movieId}")
    public ResponseEntity<List<Room>> findTheatreByMovieId(@PathVariable int movieId)
            throws  Exception {
        return ResponseEntity.ok(roomService.findRoomByMovie(movieId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Room>> getAllRoom() throws  Exception {
        return ResponseEntity.ok(roomService.getAllRoom());
    }
}
