package com.example.cinemaapp.Service;

import com.example.cinemaapp.Exceptions.CustomerException;
import com.example.cinemaapp.Exceptions.LoginException;
import com.example.cinemaapp.Exceptions.UserException;
import com.example.cinemaapp.Model.CurrentUserSession;
import com.example.cinemaapp.Model.User;

public interface LoginService{
        public CurrentUserSession addUser(User user) throws UserException, CustomerException;
        public User removeUser(User user, String key) throws UserException ;
        public User validateUser(User user,String key) throws UserException, LoginException;
        public String signOut(String key) throws UserException, LoginException ;
        }
