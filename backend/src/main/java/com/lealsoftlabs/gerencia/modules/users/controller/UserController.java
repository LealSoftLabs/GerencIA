package com.lealsoftlabs.gerencia.modules.users.controller;

import com.lealsoftlabs.gerencia.modules.auth.domain.AuthUser;

import com.lealsoftlabs.gerencia.modules.users.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<AuthUser>> findAll() {

        return ResponseEntity.ok(
                userService.findAll()
        );
    }
}