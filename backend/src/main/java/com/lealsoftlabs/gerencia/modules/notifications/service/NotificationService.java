package com.lealsoftlabs.gerencia.modules.notifications.service;

import com.lealsoftlabs.gerencia.modules.notifications.domain.Notification;

import com.lealsoftlabs.gerencia.modules.notifications.dto.CreateNotificationDTO;
import com.lealsoftlabs.gerencia.modules.notifications.dto.NotificationResponseDTO;

import com.lealsoftlabs.gerencia.modules.notifications.repository.NotificationRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository repository;

    public NotificationResponseDTO create(
            CreateNotificationDTO dto
    ) {

        Notification notification = new Notification();

        notification.setCompanyId(dto.companyId());

        notification.setRecipient(dto.recipient());

        notification.setMessage(dto.message());

        notification.setType(dto.type());

        notification.setStatus("PENDING");

        Notification saved =
                repository.save(notification);

        return new NotificationResponseDTO(
                saved.getId(),
                saved.getRecipient(),
                saved.getMessage(),
                saved.getType(),
                saved.getStatus()
        );
    }
}