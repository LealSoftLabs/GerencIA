package com.lealsoftlabs.gerencia.modules.analytics.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Analytics {

    private Long totalAppointments;

    private Long totalClients;

    private Double totalRevenue;
}