package com.lealsoftlabs.gerencia.modules.analytics.controller;

import com.lealsoftlabs.gerencia.modules.analytics.dto.AnalyticsResponseDTO;

import com.lealsoftlabs.gerencia.modules.analytics.service.AnalyticsService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @GetMapping("/dashboard")
    public ResponseEntity<AnalyticsResponseDTO> dashboard() {

        return ResponseEntity.ok(
                analyticsService.getDashboardAnalytics()
        );
    }
}