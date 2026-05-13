package com.lealsoftlabs.gerencia.modules.appointments.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record AppointmentResponseDTO(

        UUID id,

        String clientName,

        String professionalName,

        LocalDateTime appointmentDate,

        String status

) {
}