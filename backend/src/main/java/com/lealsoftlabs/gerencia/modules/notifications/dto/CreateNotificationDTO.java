package com.lealsoftlabs.gerencia.modules.notifications.dto;

import java.util.UUID;

public record CreateNotificationDTO(

        UUID companyId,

        String recipient,

        String message,

        String type

) {
}