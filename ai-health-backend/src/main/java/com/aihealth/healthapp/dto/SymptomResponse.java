package com.aihealth.healthapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SymptomResponse {
    private List<String> causes;
    private String advice;
}
