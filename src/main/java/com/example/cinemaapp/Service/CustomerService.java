package com.example.cinemaapp.Service;

import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Model.Customer;

import java.util.List;

public interface CustomerService {

    public Customer addCustomer(Customer cust) throws CustomerException;

    public Customer updateCustomer(Customer cust, String key) throws CustomerException, LoginException ;

    public Customer removeCustomer(Customer cust, String key) throws CustomerException, LoginException ;

    public Customer viewCustomer(Integer customerId)  throws CustomerException;

    public List<Customer> viewAllCustomer() throws CustomerException ;

    public Customer getCustomerDetailsByUsername(String username) throws Exception;
}
