package com.example.cinemaapp.Exceptions;


import ch.qos.logback.core.model.processor.ModelHandlerException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDetails> dataValidataionException(MethodArgumentNotValidException e, WebRequest req) {
        ErrorDetails err = new ErrorDetails(LocalDateTime.now(), "Validation Error", HttpStatus.NON_AUTHORITATIVE_INFORMATION, e.getBindingResult().getFieldError().getDefaultMessage()) ;
        return new ResponseEntity<ErrorDetails>(err,HttpStatus.NON_AUTHORITATIVE_INFORMATION);
    }

    @ExceptionHandler(LoginException.class)
    public ResponseEntity<ErrorDetails> LoginExceptionHandler(LoginException ce, WebRequest req){
        ErrorDetails err= new ErrorDetails();
        err.setTimeStamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setHttpStatus(HttpStatus.BAD_REQUEST);
        err.setDetails(req.getDescription(false));
        return new ResponseEntity<ErrorDetails>(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(CustomerException.class)
    public ResponseEntity<ErrorDetails> CustomerExceptionHandler(CustomerException ce, WebRequest req){
        ErrorDetails err= new ErrorDetails();
        err.setTimeStamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setHttpStatus(HttpStatus.BAD_REQUEST);
        err.setDetails(req.getDescription(false));
        return new ResponseEntity<ErrorDetails>(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @ExceptionHandler(UserException.class)
    public ResponseEntity<ErrorDetails> userExceptionHandler(UserException ue, WebRequest req){
        ErrorDetails err= new ErrorDetails();
        err.setTimeStamp(LocalDateTime.now());
        err.setMessage(ue.getMessage());
        err.setHttpStatus(HttpStatus.BAD_REQUEST);
        err.setDetails(req.getDescription(false));
        return new ResponseEntity<ErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetails> otherExceptionHandler(Exception se, WebRequest req){
        ErrorDetails err= new ErrorDetails();
        err.setTimeStamp(LocalDateTime.now());
        err.setMessage(se.getMessage());
        err.setHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        err.setDetails(req.getDescription(false));
        return new ResponseEntity<ErrorDetails>(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(ModelHandlerException.class)
    public ResponseEntity<ErrorDetails> MovieExceptionHandler(Exception se, WebRequest req){
        ErrorDetails err= new ErrorDetails();
        err.setTimeStamp(LocalDateTime.now());
        err.setMessage(se.getMessage());
        err.setHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        err.setDetails(req.getDescription(false));
        return new ResponseEntity<ErrorDetails>(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

