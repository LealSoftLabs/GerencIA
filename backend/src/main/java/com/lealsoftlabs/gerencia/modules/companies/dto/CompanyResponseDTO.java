package com.lealsoftlabs.gerencia.modules.companies.dto;

import java.util.UUID;

public record CompanyResponseDTO(

        UUID id,

        String name,

        String email,

        String phone,

        String plan

) {
}