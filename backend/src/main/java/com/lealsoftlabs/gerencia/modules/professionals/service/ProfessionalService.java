package com.lealsoftlabs.gerencia.modules.professionals.service;

import com.lealsoftlabs.gerencia.modules.professionals.domain.Professional;

import com.lealsoftlabs.gerencia.modules.professionals.dto.CreateProfessionalDTO;
import com.lealsoftlabs.gerencia.modules.professionals.dto.ProfessionalResponseDTO;

import com.lealsoftlabs.gerencia.modules.professionals.repository.ProfessionalRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfessionalService {

    private final ProfessionalRepository repository;

    public ProfessionalResponseDTO create(
            CreateProfessionalDTO dto
    ) {

        Professional professional = new Professional();

        professional.setCompanyId(dto.companyId());

        professional.setName(dto.name());

        professional.setEmail(dto.email());

        professional.setPhone(dto.phone());

        professional.setSpecialty(dto.specialty());

        professional.setActive(true);

        Professional saved =
                repository.save(professional);

        return new ProfessionalResponseDTO(
                saved.getId(),
                saved.getName(),
                saved.getEmail(),
                saved.getPhone(),
                saved.getSpecialty(),
                saved.getActive()
        );
    }
}