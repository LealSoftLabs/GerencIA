package com.lealsoftlabs.gerencia.modules.schedules.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

public record ScheduleResponseDTO(

        UUID id,

        UUID professionalId,

        LocalDate date,

        LocalTime startTime,

        LocalTime endTime,

        Boolean available

) {
}