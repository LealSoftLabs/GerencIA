package com.lealsoftlabs.gerencia.modules.payments.dto;

import java.util.UUID;

public record PaymentResponseDTO(

        UUID id,

        Double amount,

        String method,

        String status,

        String description

) {
}