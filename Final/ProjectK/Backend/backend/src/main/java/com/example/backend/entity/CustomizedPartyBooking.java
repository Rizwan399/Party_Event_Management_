package com.example.backend.entity;




import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomizedPartyBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String venueType;
    private String location;
    private String date;
    private String ideas;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return this.customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getVenueType() {
        return this.venueType;
    }

    public void setVenueType(String venueType) {
        this.venueType = venueType;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getIdeas() {
        return this.ideas;
    }

    public void setIdeas(String ideas) {
        this.ideas = ideas;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", customerName='" + getCustomerName() + "'" +
            ", venueType='" + getVenueType() + "'" +
            ", location='" + getLocation() + "'" +
            ", date='" + getDate() + "'" +
            ", ideas='" + getIdeas() + "'" +
            "}";
    }


   
}
