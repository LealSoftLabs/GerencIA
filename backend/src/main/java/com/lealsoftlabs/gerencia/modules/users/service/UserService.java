package com.lealsoftlabs.gerencia.modules.users.service;

import com.lealsoftlabs.gerencia.modules.auth.domain.AuthUser;

import com.lealsoftlabs.gerencia.modules.users.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public List<AuthUser> findAll() {

        return repository.findAll();
    }
}