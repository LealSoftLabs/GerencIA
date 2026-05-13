package com.lealsoftlabs.gerencia.modules.schedules.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

public record CreateScheduleDTO(

        UUID companyId,

        UUID professionalId,

        LocalDate date,

        LocalTime startTime,

        LocalTime endTime

) {
}