package com.example.cinemaapp.Repository;

import com.example.cinemaapp.Model.Tickets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketsRepo extends JpaRepository<Tickets, Integer> {

}
