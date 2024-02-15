package com.example.backend.entity;




import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EventBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;

    private String eventName;
    private String customerName;
    private Date bookingDate;
    private int amount;

    public EventBooking() {
        // Default constructor
    }

    public EventBooking(String eventName, String customerName, Date bookingDate, int amount) {
        this.eventName = eventName;
        this.customerName = customerName;
        this.bookingDate = bookingDate;
        this.amount = amount;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    // toString method for debugging/logging

    @Override
    public String toString() {
        return "EventBooking{" +
                "id=" + id +
                ", eventName='" + eventName + '\'' +
                ", customerName='" + customerName + '\'' +
                ", bookingDate=" + bookingDate +
                ", amount=" + amount +
                '}';
    }
}

