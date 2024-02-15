package com.example.backend.controler;


import com.example.backend.entity.CustomizedPartyBooking;
import com.example.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customized-party-bookings")
@CrossOrigin("http://localhost:5173")
public class CustomizedPartyBookingController {

    @Autowired
    private CustomizedPartyBookingService bookingService;

    @GetMapping
    public List<CustomizedPartyBooking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public Optional<CustomizedPartyBooking> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping
    public CustomizedPartyBooking createBooking(@RequestBody CustomizedPartyBooking booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/{id}")
    public CustomizedPartyBooking updateBooking(@PathVariable Long id, @RequestBody CustomizedPartyBooking updatedBooking) {
        return bookingService.updateBooking(id, updatedBooking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }
}
