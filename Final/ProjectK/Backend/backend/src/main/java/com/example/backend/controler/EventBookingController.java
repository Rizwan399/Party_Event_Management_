package com.example.backend.controler;



import com.example.backend.entity.EventBooking;
import com.example.backend.service.EventBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class EventBookingController {

    @Autowired
    private EventBookingService eventBookingService;

    @GetMapping
    public List<EventBooking> getAllBookings() {
        return eventBookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public Optional<EventBooking> getBookingById(@PathVariable Long id) {
        return eventBookingService.getBookingById(id);
    }

    @PostMapping
    public EventBooking createBooking(@RequestBody EventBooking booking) {
        return eventBookingService.createBooking(booking);
    }

    @PutMapping("/{id}")
    public EventBooking updateBooking(@PathVariable Long id, @RequestBody EventBooking updatedBooking) {
        return eventBookingService.updateBooking(id, updatedBooking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        eventBookingService.deleteBooking(id);
    }
}
