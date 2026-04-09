package com.aihealth.healthapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aihealth.healthapp.dto.ContactRequest;
import com.aihealth.healthapp.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService service;

    @PostMapping
    public String submit(@RequestBody ContactRequest request) {
        service.save(request);
        return "Message saved successfully";
    }
}