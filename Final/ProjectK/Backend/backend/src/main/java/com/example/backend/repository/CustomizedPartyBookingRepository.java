package com.example.backend.repository;


import com.example.backend.entity.CustomizedPartyBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomizedPartyBookingRepository extends JpaRepository<CustomizedPartyBooking, Long> {
}

