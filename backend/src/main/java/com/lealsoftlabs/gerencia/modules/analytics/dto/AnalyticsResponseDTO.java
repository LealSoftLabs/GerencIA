package com.lealsoftlabs.gerencia.modules.analytics.dto;

public record AnalyticsResponseDTO(

        Long totalAppointments,

        Long totalClients,

        Double totalRevenue

) {
}