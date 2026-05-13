package com.lealsoftlabs.gerencia.modules.companies.controller;

import com.lealsoftlabs.gerencia.modules.companies.dto.CompanyResponseDTO;
import com.lealsoftlabs.gerencia.modules.companies.dto.CreateCompanyDTO;

import com.lealsoftlabs.gerencia.modules.companies.service.CompanyService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/companies")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping
    public ResponseEntity<CompanyResponseDTO> create(

            @RequestBody CreateCompanyDTO dto
    ) {

        return ResponseEntity.ok(
                companyService.create(dto)
        );
    }
}