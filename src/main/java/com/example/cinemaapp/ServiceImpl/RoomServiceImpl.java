package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Model.Movie;
import com.example.cinemaapp.Model.Room;
import com.example.cinemaapp.Model.Show;
import com.example.cinemaapp.Repository.MoviesRepo;
import com.example.cinemaapp.Repository.RoomRepo;
import com.example.cinemaapp.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



/**
 *     getAllRoom() - retrieves all the rooms from the Room repository and returns a list of rooms.
 *     findRoom(int roomId) - finds and returns the room with the given roomId from the Room repository.
 *
 *     addRoom(Room) - adds a new room to the Room repository if the room does not already exist.
 *
 *     updateRoom(Room) - updates the room in the Room repository with the given room object.
 *
 *     deleteRoomById(int roomId) - deletes the room with the given roomId from the Room repository.
 *
 *     findRoomByMovie(Integer movieId) - retrieves all the rooms from the Room repository that are showing the movie with the given movieId.
 *     This is done by first finding the show with the given movieId in the Movies repository, and then checking which rooms have that show.
 */
@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepo roomRepo;
    @Autowired
    private MoviesRepo moviesRepo;
    @Override
    public List<Room> getAllRoom() throws Exception {
        List<Room> rooms= roomRepo.findAll();
        return  rooms;
    }

    @Override
    public Room findRoom(int roomId) {
        // TODO Auto-generated method stub
        if (roomRepo.findById(roomId).isPresent()) {
            return roomRepo.findById(roomId).get();
        } else
            return null;
    }

    @Override
    public Room addRoom(Room room) throws Exception {
        if (room != null) {
            if (roomRepo.existsById(room.getRoomId())) {
                throw new Exception("Room already exists");
            } else {
                roomRepo.saveAndFlush(room);
            }
        }
        return room;
    }

    @Override
    public List<Room> updateRoom(Room room) {
        // TODO Auto-generated method stub
        roomRepo.saveAndFlush(room);
        return roomRepo.findAll();
    }

    @Override
    public List<Room> deleteRoomById(int roomId) {
        // TODO Auto-generated method stub
        roomRepo.deleteById(roomId);
        return roomRepo.findAll();
    }

    @Override
    public List<Room> findRoomByMovie(Integer movieId) throws Exception {
        List<Room> roomList=new ArrayList<>();
        Movie movie=moviesRepo.findById(movieId).get();
        Integer showID=movie.getShow().getShowId();
        List<Room> rooms = roomRepo.findAll();
        for(Room room:rooms) {
            List<Show> shows =room.getShow();
            for(Show show:shows){
                if(show.getShowId()==showID) {
                    roomList.add(room);
                }
            }
        }
        return roomList;
    }
}
