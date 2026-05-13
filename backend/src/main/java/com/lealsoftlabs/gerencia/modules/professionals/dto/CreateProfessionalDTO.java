package com.lealsoftlabs.gerencia.modules.professionals.dto;

import java.util.UUID;

public record CreateProfessionalDTO(

        UUID companyId,

        String name,

        String email,

        String phone,

        String specialty

) {
}