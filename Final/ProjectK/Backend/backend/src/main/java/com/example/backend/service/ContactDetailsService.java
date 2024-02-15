package com.example.backend.service;



import com.example.backend.entity.ContactDetails;
import com.example.backend.repository.ContactDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactDetailsService {

    @Autowired
    private ContactDetailsRepository contactDetailsRepository;

    public List<ContactDetails> getAllContactDetails() {
        return contactDetailsRepository.findAll();
    }

    public Optional<ContactDetails> getContactDetailsById(Long id) {
        return contactDetailsRepository.findById(id);
    }

    public ContactDetails createContactDetails(ContactDetails contactDetails) {
        return contactDetailsRepository.save(contactDetails);
    }

    public ContactDetails updateContactDetails(Long id, ContactDetails updatedContactDetails) {
        Optional<ContactDetails> optionalContactDetails = contactDetailsRepository.findById(id);
        if (optionalContactDetails.isPresent()) {
            ContactDetails existingContactDetails = optionalContactDetails.get();
            existingContactDetails.setName(updatedContactDetails.getName());
            existingContactDetails.setContactNumber(updatedContactDetails.getContactNumber());
            existingContactDetails.setEmail(updatedContactDetails.getEmail());
            existingContactDetails.setLocation(updatedContactDetails.getLocation());
            existingContactDetails.setMessage(updatedContactDetails.getMessage());
            return contactDetailsRepository.save(existingContactDetails);
        } else {
            return null; // Handle error
        }
    }

    public void deleteContactDetails(Long id) {
        contactDetailsRepository.deleteById(id);
  }
}