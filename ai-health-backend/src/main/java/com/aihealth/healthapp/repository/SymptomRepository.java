package com.aihealth.healthapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aihealth.healthapp.model.Symptom;

import java.util.Optional;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {

    Optional<Symptom> findByKeywordIgnoreCase(String keyword);
}
