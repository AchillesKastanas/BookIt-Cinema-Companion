package com.example.cinemaapp.Controllers;

import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Model.Customer;
import com.example.cinemaapp.Service.CustomerService;
import com.example.cinemaapp.ServiceImpl.EmailSenderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *This is a Spring Boot controller class that handles HTTP requests related to customers.
 *It uses dependency injection to inject instances of CustomerService and EmailSenderServiceImpl, and defines several methods:
 *addCustomerHandler: creates a new customer via a POST request to "/customers" and returns the created customer, while also sending a confirmation email to the customer's email address.
 *updateCustomerHandler: updates an existing customer via a PUT request to "/customers/{key}" and returns the updated customer.
 *removeCustomerHandler: deletes an existing customer via a DELETE request to "/customers/{key}" and returns the deleted customer.
 *getCustomerHandler: retrieves an existing customer via a GET request to "/customers/{customerId}" and returns the customer.
 *getAllCustomers: retrieves all existing customers via a GET request to "/getallcustomers" and returns a list of customers.
 * All endpoints expect and return JSON data in the Customer format, and some methods also throw custom exceptions such as CustomerException and LoginException.
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private EmailSenderServiceImpl emailSenderService;

    @PostMapping(value = "/register",consumes= MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json")
    public ResponseEntity<Customer> addCustomerHandler(@RequestBody Customer customer) throws CustomerException{
        Customer addedCustomer = customerService.addCustomer(customer);
        String message = "Dear "+customer.getUsername() +",\n\nThank you for registering with our online cinema movie booking application. We look forward to bringing you the best movie experience.\n\nSincerely,\nThe Online Cinema Movie Booking Shop team";
        //emailSenderService.sendEmail(customer.getEmail(),"Registry confirmation",message);
        return new ResponseEntity<Customer>(addedCustomer, HttpStatus.CREATED);
    }

    @PutMapping("/update/{key}")
    public ResponseEntity<Customer> updateCustomerHandler(@PathVariable("key") String key,@RequestBody Customer customer) throws LoginException, CustomerException{
        Customer updatedCustomer = customerService.updateCustomer(customer, key);
        return new ResponseEntity<Customer>(updatedCustomer, HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{key}")
    public ResponseEntity<Customer> removeCustomerHandler(@PathVariable("key") String key,@RequestBody Customer customer) throws CustomerException, LoginException{
        Customer deletedCustomer = customerService.removeCustomer(customer, key);
        return new ResponseEntity<Customer>(deletedCustomer, HttpStatus.OK);
    }

    @GetMapping("/getCustomer/{customerid}")
    public ResponseEntity<Customer> getCustomerHandler(@PathVariable("customerid") Integer customerId) throws CustomerException{
        Customer existingCustomer = customerService.viewCustomer(customerId);
        return new ResponseEntity<Customer>(existingCustomer, HttpStatus.OK);
    }

    @GetMapping("/getallcustomers")
    public ResponseEntity<List<Customer>> getAllCustomers() throws CustomerException {
        List<Customer> customers = customerService.viewAllCustomer();
        return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
    }
}
