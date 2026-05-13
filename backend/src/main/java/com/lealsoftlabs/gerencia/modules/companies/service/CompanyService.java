package com.lealsoftlabs.gerencia.modules.companies.service;

import com.lealsoftlabs.gerencia.modules.companies.domain.Company;

import com.lealsoftlabs.gerencia.modules.companies.dto.CompanyResponseDTO;
import com.lealsoftlabs.gerencia.modules.companies.dto.CreateCompanyDTO;

import com.lealsoftlabs.gerencia.modules.companies.repository.CompanyRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository repository;

    public CompanyResponseDTO create(
            CreateCompanyDTO dto
    ) {

        Company company = new Company();

        company.setName(dto.name());

        company.setEmail(dto.email());

        company.setPhone(dto.phone());

        company.setPlan("FREE");

        Company saved =
                repository.save(company);

        return new CompanyResponseDTO(
                saved.getId(),
                saved.getName(),
                saved.getEmail(),
                saved.getPhone(),
                saved.getPlan()
        );
    }
}