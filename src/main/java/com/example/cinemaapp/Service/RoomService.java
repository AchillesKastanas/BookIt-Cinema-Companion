package com.example.cinemaapp.Service;

import com.example.cinemaapp.Model.Room;

import java.util.List;

public interface RoomService {
    public List<Room> getAllRoom() throws Exception;

    public Room findRoom(int roomId);

    public Room addRoom(Room room) throws Exception;

    public List<Room> updateRoom(Room room);

    public List<Room> deleteRoomById(int roomId);

    public List<Room> findRoomByMovie(Integer movieId) throws Exception;
}

