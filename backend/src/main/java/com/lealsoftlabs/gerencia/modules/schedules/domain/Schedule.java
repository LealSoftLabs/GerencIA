package com.lealsoftlabs.gerencia.modules.schedules.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Schedule extends BaseEntity {

    private UUID companyId;

    private UUID professionalId;

    private LocalDate date;

    private LocalTime startTime;

    private LocalTime endTime;

    private Boolean available;
}