package com.example.cinemaapp.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customerId;

    @Size(min = 5, max = 15, message = "Username should be min 5 and max 15 Characters!")
    private String username;

    @Size(min = 10, max = 10, message = "Mobile Number should contain 10 digit only!")
    private String mobile_number;


    @Size(min = 8, max = 16, message = "Password must contain min 8 and max 16 digits!")
    private String password;

    @Email(message = "Please enter a valid email...")
    private String email;


    public Customer(
            @Size(min = 5, max = 15, message = "Username should be min 5 and max 15 Characters!") String username,
            @Min(value = 10, message = "Mobile Number should contain 10 digit only!") @Max(value = 10, message = "Mobile Number should contain 10 digit only!") String mobile_number,
            @Pattern(regexp = "^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[&!@#%$^]){8,16}$)", message = "Password must contain atleast 1 uppercase, 1 lowercase, 1 special character from[&!@#%^$] and 1 digit") @Size(min = 8, max = 16, message = "Password must contain min 8 and max 16 digits!") String password,
            @Email(message = "Please enter a valid email...") String email) {
        super();
        this.username = username;
        this.mobile_number = mobile_number;
        this.password = password;
        this.email = email;
    }
}

