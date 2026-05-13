package com.lealsoftlabs.gerencia.modules.notifications.repository;

import com.lealsoftlabs.gerencia.modules.notifications.domain.Notification;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NotificationRepository
        extends JpaRepository<Notification, UUID> {
}