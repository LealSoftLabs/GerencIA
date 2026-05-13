package com.lealsoftlabs.gerencia.modules.auth.controller;

import com.lealsoftlabs.gerencia.modules.auth.dto.LoginRequestDTO;
import com.lealsoftlabs.gerencia.modules.auth.dto.LoginResponseDTO;

import com.lealsoftlabs.gerencia.modules.auth.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(

            @RequestBody LoginRequestDTO dto
    ) {

        return ResponseEntity.ok(
                authService.login(dto)
        );
    }
}