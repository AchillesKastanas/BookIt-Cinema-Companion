package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Model.Customer;
import com.example.cinemaapp.Repository.CurrentUserSessionRepo;
import com.example.cinemaapp.Repository.CustomerRepo;
import com.example.cinemaapp.Service.CurrentCustomerService;
import com.example.cinemaapp.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
/**
 * The addCustomer method adds a new customer to the database if the username is unique,
 * otherwise, it throws a CustomerException with a message "Customer already Exist With this Username".
 *
 * The updateCustomer method updates an existing customer's details if the customer is currently
 * logged in and the mobile number is a 10-digit number.
 * If the customer ID in the request does not match the ID of the logged-in customer,
 * the method throws a CustomerException with a message "Can't change UserID!".
 *
 * The getCustomerDetailsByUsername method retrieves a customer's details by their username.
 * If the customer is not found, it throws an Exception with a message "Customer not found with username: ".
 *
 * The removeCustomer method removes a customer from the database by their ID.
 *
 * The viewCustomer method retrieves a customer's details by their ID. If the customer is not found,
 * it throws a CustomerException with a message "Customer doesn't found...".
 *
 * The viewAllCustomer method retrieves all customers from the database. If there are no customers in the database,
 * it throws a CustomerException with a message "No Customers Found".
 */
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CurrentCustomerService currentCustomerService;


    //todo
    @Autowired
    CurrentUserSessionRepo currentUserSessionRepo;

    @Override
    public Customer addCustomer(Customer cust) throws CustomerException {
       Optional<Customer> opt = customerRepo.findByUsername(cust.getUsername()) ;
        if(opt.isPresent()) {
            throw new CustomerException("Customer already Exist With this Username");
        }

        return customerRepo.save(cust);
    }

    @Override
    public Customer updateCustomer(Customer cust, String key) throws CustomerException, LoginException {

        Customer customerDetails = currentCustomerService.getCustomerDetails(key) ;

        if(customerDetails == null) {
            throw new LoginException("No user Found | Login first");
        }else if( cust.getMobile_number().toCharArray().length != 10 ){

            throw new CustomerException("Mobile Number can only be of 10 digit");
        }

        if(cust.getCustomerId() == customerDetails.getCustomerId()) {
            return customerRepo.save(cust) ;
        }
        else {
            throw new CustomerException("Can't change UserID!") ;
        }


    }
    @Override
    public Customer getCustomerDetailsByUsername(String username) throws Exception {
        return customerRepo.findByUsername(username)
                .orElseThrow(
                        () -> new Exception("Customer not found with username: " + username)
                );
    }

    @Override
    public Customer removeCustomer(Customer cust, String key) {
        Customer removeCustomer = customerRepo.getOne(cust.getCustomerId());
        customerRepo.delete(removeCustomer);
        return removeCustomer;
    }

    @Override
    public Customer viewCustomer(Integer customerId) throws CustomerException {
        Optional<Customer> cust = customerRepo.findById(customerId);
        cust.orElseThrow(()-> new CustomerException("Customer doesn't found..."));
        return cust.get();

    }

    @Override
    public List<Customer> viewAllCustomer() throws CustomerException {
        return customerRepo.findAll();
    }

}
