package com.lealsoftlabs.gerencia.modules.professionals.repository;

import com.lealsoftlabs.gerencia.modules.professionals.domain.Professional;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProfessionalRepository
        extends JpaRepository<Professional, UUID> {
}