package com.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class events {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Id
     private String PartyName;
     private String description;
     private String Date;
     private int Amount;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPartyName() {
        return this.PartyName;
    }

    public void setPartyName(String PartyName) {
        this.PartyName = PartyName;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return this.Date;
    }

    public void setDate(String Date) {
        this.Date = Date;
    }

    public int getAmount() {
        return this.Amount;
    }

    public void setAmount(int Amount) {
        this.Amount = Amount;
    }

    public events(int id, String PartyName, String description, String Date, int Amount) {
        this.id = id;
        this.PartyName = PartyName;
        this.description = description;
        this.Date = Date;
        this.Amount = Amount;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", PartyName='" + getPartyName() + "'" +
            ", description='" + getDescription() + "'" +
            ", Date='" + getDate() + "'" +
            ", Amount='" + getAmount() + "'" +
            "}";
    }
     
     
}