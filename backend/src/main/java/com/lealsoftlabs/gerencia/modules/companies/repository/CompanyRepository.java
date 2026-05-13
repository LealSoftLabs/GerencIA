package com.lealsoftlabs.gerencia.modules.companies.repository;

import com.lealsoftlabs.gerencia.modules.companies.domain.Company;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CompanyRepository
        extends JpaRepository<Company, UUID> {
}