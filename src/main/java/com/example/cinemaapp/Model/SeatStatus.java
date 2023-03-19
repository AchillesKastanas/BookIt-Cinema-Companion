package com.example.cinemaapp.Model;

public enum SeatStatus {
    AVAILABLE("Available"), BOOKED("Booked"),CANCELLED("Canceled");

    public String getStatus() {
        return status;
    }

    private void setStatus(String status) {
        this.status = status;
    }

    private String status;

    private SeatStatus(String status) {
        this.status = status;
    }


}
