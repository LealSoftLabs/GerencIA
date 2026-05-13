package com.lealsoftlabs.gerencia.modules.analytics.service;

import com.lealsoftlabs.gerencia.modules.analytics.dto.AnalyticsResponseDTO;

import org.springframework.stereotype.Service;

@Service
public class AnalyticsService {

    public AnalyticsResponseDTO getDashboardAnalytics() {

        /*
         FUTURAMENTE:
         buscar dados reais do banco
        */

        return new AnalyticsResponseDTO(
                120L,
                58L,
                15420.90
        );
    }
}