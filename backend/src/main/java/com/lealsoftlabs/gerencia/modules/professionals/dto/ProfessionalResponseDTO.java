package com.lealsoftlabs.gerencia.modules.professionals.dto;

import java.util.UUID;

public record ProfessionalResponseDTO(

        UUID id,

        String name,

        String email,

        String phone,

        String specialty,

        Boolean active

) {
}