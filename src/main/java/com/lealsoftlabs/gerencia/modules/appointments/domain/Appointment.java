package com.lealsoftlabs.gerencia.modules.appointments.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Appointment extends BaseEntity {

    private UUID companyId;

    private String clientName;

    private String professionalName;

    private LocalDateTime appointmentDate;

    private String status;
}