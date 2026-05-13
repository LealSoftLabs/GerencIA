package com.lealsoftlabs.gerencia.modules.notifications.dto;

import java.util.UUID;

public record NotificationResponseDTO(

        UUID id,

        String recipient,

        String message,

        String type,

        String status

) {
}