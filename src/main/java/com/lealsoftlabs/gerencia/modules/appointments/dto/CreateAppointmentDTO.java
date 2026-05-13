package com.lealsoftlabs.gerencia.modules.appointments.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record CreateAppointmentDTO(

        UUID companyId,

        String clientName,

        String professionalName,

        LocalDateTime appointmentDate

) {
}