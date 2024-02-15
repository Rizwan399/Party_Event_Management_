package com.example.backend.controler;


import com.example.backend.entity.ContactDetails;
import com.example.backend.service.ContactDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contact-details")
@CrossOrigin(origins = "http://localhost:5173") 
public class ContactDetailsController {

    @Autowired
    private ContactDetailsService contactDetailsService;

    @GetMapping
    public List<ContactDetails> getAllContactDetails() {
        return contactDetailsService.getAllContactDetails();
    }

    @GetMapping("/{id}")
    public Optional<ContactDetails> getContactDetailsById(@PathVariable Long id) {
        return contactDetailsService.getContactDetailsById(id);
    }

    @PostMapping
    public ContactDetails createContactDetails(@RequestBody ContactDetails contactDetails) {
        return contactDetailsService.createContactDetails(contactDetails);
    }

    @PutMapping("/{id}")
    public ContactDetails updateContactDetails(@PathVariable Long id, @RequestBody ContactDetails updatedContactDetails) {
        return contactDetailsService.updateContactDetails(id, updatedContactDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteContactDetails(@PathVariable Long id) {
        contactDetailsService.deleteContactDetails(id);
   }
}