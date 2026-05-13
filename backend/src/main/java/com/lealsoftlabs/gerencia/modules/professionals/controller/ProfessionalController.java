package com.lealsoftlabs.gerencia.modules.professionals.controller;

import com.lealsoftlabs.gerencia.modules.professionals.dto.CreateProfessionalDTO;
import com.lealsoftlabs.gerencia.modules.professionals.dto.ProfessionalResponseDTO;

import com.lealsoftlabs.gerencia.modules.professionals.service.ProfessionalService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/professionals")
@RequiredArgsConstructor
public class ProfessionalController {

    private final ProfessionalService professionalService;

    @PostMapping
    public ResponseEntity<ProfessionalResponseDTO> create(

            @RequestBody CreateProfessionalDTO dto
    ) {

        return ResponseEntity.ok(
                professionalService.create(dto)
        );
    }
}