package com.aihealth.healthapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aihealth.healthapp.dto.*;
import com.aihealth.healthapp.service.SymptomService;

@RestController
@RequestMapping("/api/symptoms")
@CrossOrigin
public class SymptomController {

    @Autowired
    private SymptomService service;

    @PostMapping("/analyze")
    public SymptomResponse analyze(@RequestBody SymptomRequest request) {
        return service.analyze(request);
    }
}
