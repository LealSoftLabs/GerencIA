package com.lealsoftlabs.gerencia.modules.notifications.controller;

import com.lealsoftlabs.gerencia.modules.notifications.dto.CreateNotificationDTO;
import com.lealsoftlabs.gerencia.modules.notifications.dto.NotificationResponseDTO;

import com.lealsoftlabs.gerencia.modules.notifications.service.NotificationService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    @PostMapping
    public ResponseEntity<NotificationResponseDTO> create(

            @RequestBody CreateNotificationDTO dto
    ) {

        return ResponseEntity.ok(
                notificationService.create(dto)
        );
    }
}