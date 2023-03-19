package com.example.cinemaapp.Service;

import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Model.CurrentUserSession;
import com.example.cinemaapp.Model.Customer;

public interface CurrentCustomerService {
    public CurrentUserSession getCurrentCustomerSession(String key) throws LoginException;
    public Integer getCurrentCustomerId(String key) throws LoginException;
    public Customer getCustomerDetails(String key) throws LoginException;
}


