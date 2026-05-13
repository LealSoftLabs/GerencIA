package com.lealsoftlabs.gerencia.modules.notifications.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Notification extends BaseEntity {

    private UUID companyId;

    private String recipient;

    private String message;

    private String type;

    private String status;
}