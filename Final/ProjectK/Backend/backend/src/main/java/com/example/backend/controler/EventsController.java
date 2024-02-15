package com.example.backend.controler;



import com.example.backend.entity.events;
import com.example.backend.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventsController {

    @Autowired
    private EventsService eventsService;

    // Create operation
    @PostMapping
    public events createEvent(@RequestBody events event) {
        events savedEvent = eventsService.createEvent(event);
        System.out.println("Event created: " + savedEvent);
        return savedEvent;
    }

    // Read operation
    @GetMapping
    public List<events> getAllEvents() {
        return eventsService.getAllEvents();
    }

    // Update operation
    @PutMapping("/{partyName}")
    public events updateEvent(@PathVariable String partyName, @RequestBody events updatedEvent) {
        events existingEvent = eventsService.updateEvent(partyName, updatedEvent);
        System.out.println("Event updated: " + existingEvent);
        return existingEvent;
    }

    // Delete operation
    @DeleteMapping("/{partyName}")
    public void deleteEvent(@PathVariable String partyName) {
        eventsService.deleteEvent(partyName);
        System.out.println("Event deleted with party name: " + partyName);
    }
}
