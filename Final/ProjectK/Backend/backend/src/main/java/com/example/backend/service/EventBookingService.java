package com.example.backend.service;



import com.example.backend.entity.EventBooking;
import com.example.backend.repository.EventBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventBookingService {

    @Autowired
    private EventBookingRepository eventBookingRepository;

    public List<EventBooking> getAllBookings() {
        return eventBookingRepository.findAll();
    }

    public Optional<EventBooking> getBookingById(Long id) {
        return eventBookingRepository.findById(id);
    }

    public EventBooking createBooking(EventBooking booking) {
        return eventBookingRepository.save(booking);
    }

    public EventBooking updateBooking(Long id, EventBooking updatedBooking) {
        Optional<EventBooking> optionalBooking = eventBookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            EventBooking existingBooking = optionalBooking.get();
            existingBooking.setEventName(updatedBooking.getEventName());
            existingBooking.setCustomerName(updatedBooking.getCustomerName());
            existingBooking.setBookingDate(updatedBooking.getBookingDate());
            existingBooking.setAmount(updatedBooking.getAmount());
            return eventBookingRepository.save(existingBooking);
        } else {
            // Handle error, throw exception, etc.
            return null;
        }
    }

    public void deleteBooking(Long id) {
        eventBookingRepository.deleteById(id);
    }
}
