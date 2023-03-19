package com.example.cinemaapp.ServiceImpl;

import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Exceptions.UserException;
import com.example.cinemaapp.Model.CurrentUserSession;
import com.example.cinemaapp.Model.Customer;
import com.example.cinemaapp.Model.User;
import com.example.cinemaapp.Repository.CurrentUserSessionRepo;
import com.example.cinemaapp.Repository.CustomerRepo;
import com.example.cinemaapp.Service.CurrentCustomerService;
import com.example.cinemaapp.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;


/**
 * The CustomerRepo is a repository for customers and is likely used to retrieve customer information for authentication.
 * The CurrentUserSessionRepo is a repository for tracking active user sessions.
 * The CurrentCustomerService is a service used to retrieve customer details based on a key, which is likely a session key.
 *
 * The addUser method is used to add a user to the system by checking if a customer exists with the given userId,
 * checking if the user is already logged in, and then creating a new CurrentUserSession and saving it to the repository.
 *
 * The signOut method is used to log out a user by deleting their session from the repository.
 *
 * The validateUser method is used to validate a user's credentials by retrieving their session information,
 * retrieving the associated customer information, and then comparing the user's credentials with the customer's information.
 *
 * The removeUser method is currently unimplemented and would likely be used to remove a user from the system by
 * deleting their associated CurrentUserSession.
 */
@Service
public class LoginServiceImpl implements LoginService {


    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CurrentUserSessionRepo currentUserSessionRepo;

    @Autowired
    CurrentCustomerService currentCustomerService;

    @Override
    public CurrentUserSession addUser(User user) throws UserException, CustomerException {
        Optional<Customer> opt = customerRepo.findByUsername(user.getUserId()) ;
        if(opt.isEmpty()) {
            throw new CustomerException("User with Mobile number NOT FOUND: "+user.getUserId());
        }
        Customer currentCustomer = opt.get();
        Integer customerId = currentCustomer.getCustomerId();
        Optional<CurrentUserSession> currentUserOptional = currentUserSessionRepo.findByCustomerId(customerId);
        if(currentUserOptional.isPresent()) {
            throw new UserException("User: " + user.getUserId()+" has already logged in!!!");
        }
        if(currentCustomer.getMobile_number().equals(user.getUserId()) && currentCustomer.getPassword().equals(user.getPassword())) {
            int leftLimit = 97; // letter 'a'
            int rightLimit = 122; // letter 'z'
            int targetStringLength = 10;
            Random random = new Random();
            String key = random.ints(leftLimit, rightLimit + 1)
                    .limit(targetStringLength)
                    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                    .toString();
            CurrentUserSession currentUserSession = new CurrentUserSession(customerId, key, LocalDateTime.now()) ;
            return  currentUserSessionRepo.save(currentUserSession) ;
        }
        else {
            throw new UserException("Invalid UserId OR Password");
        }
    }



    @Override
    public String signOut(String key) throws UserException, LoginException {
        CurrentUserSession userSession = currentCustomerService.getCurrentCustomerSession(key);

        if(userSession != null) {

            currentUserSessionRepo.delete(userSession);


            return "Logged out...";
        }
        else {
            throw new UserException("Having some problem to logout");
        }
    }

    @Override
    public User removeUser(User user, String key) throws UserException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User validateUser(User user, String key) throws UserException {

        Optional<CurrentUserSession> opt = currentUserSessionRepo.findByUuid(key) ;

        if(opt.isEmpty()) {
            throw new UserException("Invalid Key");
        }

        CurrentUserSession currentUserSession = opt.get();

        Optional<Customer> currentCustomerOpt = customerRepo.findById(currentUserSession.getCustomerId()) ;

        Customer currentCustomer = currentCustomerOpt.get();

        if(user.getUserId().equals(currentCustomer.getMobile_number()) && user.getPassword().equals(currentCustomer.getPassword())) {
            return user;
        }
        else {
            throw new UserException("Invalid Mobile Number or Password");
        }


    }

}

