package com.example.cinemaapp.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * This code defines a method for sending an email using the Spring Framework's JavaMailSender interface.
 * The JavaMailSender interface provides a way to send emails through a JavaMail Session.
 * The sendEmail method takes three parameters: the recipient email address, the email subject, and the email body.
 * It creates a new SimpleMailMessage object, sets the from, to, text, and subject properties of the message,
 * and sends the message using the mailSender instance. Finally, it prints a message to the console
 * indicating that the email was sent successfully.
 */
@Service
public class EmailSenderServiceImpl {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String toEmail, String subject, String body )
    {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("satokr@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        mailSender.send(message);
        System.out.println("Mail Sent successfully");
    }
}
