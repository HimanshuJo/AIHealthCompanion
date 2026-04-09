package com.aihealth.healthapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aihealth.healthapp.dto.*;
import com.aihealth.healthapp.model.Symptom;
import com.aihealth.healthapp.repository.SymptomRepository;

import java.util.ArrayList;
import java.util.List;

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

        List<String>unknownList=new ArrayList<>();
        unknownList.add("unknown");

        return new SymptomResponse(
                unknownList,
                "Please consult a doctor if symptoms persist"
        );
    }

    private SymptomResponse map(String keyword) {
        List<Symptom> symptoms = repo.findByKeywordIgnoreCase(keyword);

        if (symptoms.isEmpty()) {
            List<String>unknownList=new ArrayList<>();
            unknownList.add("unknown");
            return new SymptomResponse(unknownList, "No data found");
        }

        List<String> causes = symptoms.stream()
                .map(Symptom::getCause)
                .distinct()
                .toList();

        return new SymptomResponse(causes, symptoms.get(0).getAdvice());
    }
}
