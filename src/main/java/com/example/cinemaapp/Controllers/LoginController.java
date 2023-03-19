package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.DTO.LoginDTO;
import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Exceptions.UserException;
import com.example.cinemaapp.Model.CurrentUserSession;
import com.example.cinemaapp.Model.Customer;
import com.example.cinemaapp.Model.User;
import com.example.cinemaapp.Repository.CurrentUserSessionRepo;
import com.example.cinemaapp.Service.CustomerService;
import com.example.cinemaapp.Service.LoginService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * This is a Spring Boot controller class that handles HTTP requests related to user authentication and logout. It defines two methods:
 *addUser: authenticates a user via a POST request to "/login" and returns a message indicating success, a randomly generated token, and the user's ID.
 *It also saves a record of the user's session in the database.
 *logoutUser: logs out a user via a DELETE request to "/logout" and returns a message indicating success. It uses the LoginService to sign the user out.
 *The addUser method checks if the provided username and password match an existing customer's details, throws an exception if they do not match.
 * It uses a secure random number generator to create a token and saves a new CurrentUserSession object in the database to keep track of the user's session.
 * The logoutUser method takes a token as a parameter and uses the LoginService to sign the user out and remove their session record from the database.
 */
@RestController
@RequestMapping("/users")
public class LoginController {

    @Autowired
    private LoginService loginService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private CurrentUserSessionRepo currentUserSessionRepo;

    @PostMapping("/login")
    public ResponseEntity addUser(@RequestBody LoginDTO loginDTO) throws Exception {
        Map<String, String> model = new HashMap<>();
        Customer savedCustomer = customerService.getCustomerDetailsByUsername(loginDTO.getUsername());
        if (!savedCustomer.getPassword().equals(loginDTO.getPassword())) {
            throw new Exception("Invalid username/password");
        }
        model.put("message","Logged in Successfully");
        model.put("token", savedCustomer.getUsername());
        model.put("customer_id", String.valueOf(savedCustomer.getCustomerId()));
        LocalDateTime rightNow = LocalDateTime.now();
        CurrentUserSession currentUserSession= new CurrentUserSession(loginDTO.getCustomer_id(), loginDTO.getUsername(),rightNow );
        currentUserSessionRepo.save(currentUserSession);
        return ResponseEntity.ok(model);
    }

    @DeleteMapping("/logout")
    public ResponseEntity<String> logoutUser(@RequestParam String key) throws UserException, LoginException {
        String response = loginService.signOut(key);
        return ResponseEntity.ok(response);
    }
}
