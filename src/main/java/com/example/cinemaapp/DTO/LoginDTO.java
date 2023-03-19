package com.example.cinemaapp.DTO;


public class LoginDTO {
    private String username;
    private String password;

    public Integer getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(Integer customer_id) {
        this.customer_id = customer_id;
    }

    private Integer customer_id;
    public LoginDTO() {
    }

    public LoginDTO(String username, String password, Integer customer_id) {
        this.username = username;
        this.password = password;
        this.customer_id=customer_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

