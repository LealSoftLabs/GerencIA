package com.lealsoftlabs.gerencia.modules.schedules.controller;

import com.lealsoftlabs.gerencia.modules.schedules.dto.CreateScheduleDTO;
import com.lealsoftlabs.gerencia.modules.schedules.dto.ScheduleResponseDTO;

import com.lealsoftlabs.gerencia.modules.schedules.service.ScheduleService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleService scheduleService;

    @PostMapping
    public ResponseEntity<ScheduleResponseDTO> create(

            @RequestBody CreateScheduleDTO dto
    ) {

        return ResponseEntity.ok(
                scheduleService.create(dto)
        );
    }
}