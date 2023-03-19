package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Model.CurrentUserSession;
import com.example.cinemaapp.Model.Customer;
import com.example.cinemaapp.Repository.CurrentUserSessionRepo;
import com.example.cinemaapp.Repository.CustomerRepo;
import com.example.cinemaapp.Service.CurrentCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 *     getCurrentCustomerSession(String key) retrieves the current user session by calling the findByUuid()
 *     method of an injected currentUserSessionRepo instance with the specified key.
 *     If no user session is found, a LoginException is thrown.
 *
 *     getCurrentCustomerId(String key) retrieves the current customer ID from the current user session
 *     by calling the findByUuid() method of an injected currentUserSessionRepo instance with the specified key,
 *     and returns the corresponding customer ID. If no user session is found, a LoginException is thrown.
 *
 *     getCustomerDetails(String key) retrieves the customer details for the current user session by calling
 *     the findByUuid() method of an injected currentUserSessionRepo instance with the specified key to obtain the
 *     corresponding customer ID, and then calling the findById() method of an injected customerRepo instance with
 *     the customer ID to retrieve the corresponding customer object. If no user session is found, a LoginException is thrown.
 */
@Service
public class CurrentCustomerServiceImpl implements CurrentCustomerService {



    @Autowired
    private CurrentUserSessionRepo currentUserSessionRepo;


    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public CurrentUserSession getCurrentCustomerSession(String key) throws LoginException {
        Optional<CurrentUserSession> currentUser = currentUserSessionRepo.findByUuid(key);
        if(!currentUser.isPresent()) {
            throw new  LoginException("User has not logged in");
        }
        return currentUser.get();
    }

    @Override
    public Integer getCurrentCustomerId(String key) throws LoginException {
        Optional<CurrentUserSession> currentUser = currentUserSessionRepo.findByUuid(key);
        if(!currentUser.isPresent()) {
            throw new  LoginException("User has not logged in");
        }
        return currentUser.get().getCustomerId();
    }

    @Override
    public Customer getCustomerDetails(String key) throws LoginException {
        Optional<CurrentUserSession> currentUser = currentUserSessionRepo.findByUuid(key);
        if(!currentUser.isPresent()) {
            throw new  LoginException("User has not logged in");
        }
        Integer customerId = currentUser.get().getCustomerId();
        return customerRepo.findById(customerId).get();
    }

}

