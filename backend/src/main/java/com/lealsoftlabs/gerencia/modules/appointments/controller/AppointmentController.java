package com.lealsoftlabs.gerencia.modules.appointments.controller;

import com.lealsoftlabs.gerencia.modules.appointments.dto.AppointmentResponseDTO;
import com.lealsoftlabs.gerencia.modules.appointments.dto.CreateAppointmentDTO;

import com.lealsoftlabs.gerencia.modules.appointments.service.AppointmentService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<AppointmentResponseDTO> create(

            @RequestBody CreateAppointmentDTO dto
    ) {

        return ResponseEntity.ok(
                appointmentService.create(dto)
        );
    }
}