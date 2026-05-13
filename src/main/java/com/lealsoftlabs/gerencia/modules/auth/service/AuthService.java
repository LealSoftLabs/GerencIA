package com.lealsoftlabs.gerencia.modules.auth.service;

import com.lealsoftlabs.gerencia.modules.auth.domain.AuthUser;

import com.lealsoftlabs.gerencia.modules.auth.dto.LoginRequestDTO;
import com.lealsoftlabs.gerencia.modules.auth.dto.LoginResponseDTO;

import com.lealsoftlabs.gerencia.modules.auth.repository.AuthRepository;

import com.lealsoftlabs.gerencia.security.JwtService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthRepository repository;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;

    public LoginResponseDTO login(
            LoginRequestDTO dto
    ) {

        AuthUser user = repository.findByEmail(dto.email())
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado")
                );

        boolean passwordMatches =
                passwordEncoder.matches(
                        dto.password(),
                        user.getPassword()
                );

        if (!passwordMatches) {

            throw new RuntimeException("Senha inválida");
        }

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new LoginResponseDTO(token);
    }
}