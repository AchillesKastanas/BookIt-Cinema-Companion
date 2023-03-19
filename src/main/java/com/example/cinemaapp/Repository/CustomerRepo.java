package com.example.cinemaapp.Repository;

import com.example.cinemaapp.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    public Optional<Customer> findByUsername(String username) ;
    public Optional<Customer> findCustomerByUsername(Customer username);

}