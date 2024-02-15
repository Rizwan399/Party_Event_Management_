package com.example.backend.service;


import com.example.backend.entity.CustomizedPartyBooking;
import com.example.backend.repository.CustomizedPartyBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomizedPartyBookingService {

    @Autowired
    private CustomizedPartyBookingRepository bookingRepository;

    public List<CustomizedPartyBooking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<CustomizedPartyBooking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public CustomizedPartyBooking createBooking(CustomizedPartyBooking booking) {
        return bookingRepository.save(booking);
    }

    public CustomizedPartyBooking updateBooking(Long id, CustomizedPartyBooking updatedBooking) {
        Optional<CustomizedPartyBooking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            CustomizedPartyBooking existingBooking = optionalBooking.get();
            // Update existingBooking properties with updatedBooking
            existingBooking.setCustomerName(updatedBooking.getCustomerName());
            existingBooking.setVenueType(updatedBooking.getVenueType());
            existingBooking.setLocation(updatedBooking.getLocation());
            existingBooking.setDate(updatedBooking.getDate());
            existingBooking.setIdeas(updatedBooking.getIdeas());
            return bookingRepository.save(existingBooking);
        } else {
            // Handle error, throw exception, etc.
            return null;
        }
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
