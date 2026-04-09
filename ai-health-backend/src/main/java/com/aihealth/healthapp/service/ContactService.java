package com.aihealth.healthapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.aihealth.healthapp.dto.ContactRequest;
import com.aihealth.healthapp.model.ContactMessage;
import com.aihealth.healthapp.repository.ContactRepository;

import java.time.LocalDateTime;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    public void save(ContactRequest request) {
        ContactMessage msg = ContactMessage.builder()
                .name(request.getName())
                .email(request.getEmail())
                .message(request.getMessage())
                .createdAt(LocalDateTime.now())
                .build();

        repository.save(msg);
    }
}