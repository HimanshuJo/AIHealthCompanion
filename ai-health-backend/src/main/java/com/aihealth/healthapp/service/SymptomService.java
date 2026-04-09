package com.aihealth.healthapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aihealth.healthapp.dto.*;
import com.aihealth.healthapp.model.Symptom;
import com.aihealth.healthapp.repository.SymptomRepository;

@Service
public class SymptomService {

    @Autowired
    private SymptomRepository repo;

    public SymptomResponse analyze(SymptomRequest request) {

        String input = request.getSymptom().toLowerCase();

        if (input.contains("headache")) {
            return map("headache");
        }

        if (input.contains("fever")) {
            return map("fever");
        }

        return new SymptomResponse(
                "Unknown",
                "Please consult a doctor if symptoms persist"
        );
    }

    private SymptomResponse map(String keyword) {
        Symptom symptom = repo.findByKeywordIgnoreCase(keyword)
                .orElse(null);

        if (symptom == null) {
            return new SymptomResponse("Unknown", "No data found");
        }

        return new SymptomResponse(
                symptom.getCause(),
                symptom.getAdvice()
        );
    }
}
