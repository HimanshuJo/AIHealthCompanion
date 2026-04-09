package com.aihealth.healthapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aihealth.healthapp.model.ContactMessage;

public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
}