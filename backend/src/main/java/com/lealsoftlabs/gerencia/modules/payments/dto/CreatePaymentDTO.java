package com.lealsoftlabs.gerencia.modules.payments.dto;

import java.util.UUID;

public record CreatePaymentDTO(

        UUID companyId,

        Double amount,

        String method,

        String description

) {
}