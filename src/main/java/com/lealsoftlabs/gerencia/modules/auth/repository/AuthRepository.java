package com.lealsoftlabs.gerencia.modules.auth.repository;

import com.lealsoftlabs.gerencia.modules.auth.domain.AuthUser;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository
        extends JpaRepository<AuthUser, UUID> {

    Optional<AuthUser> findByEmail(String email);
}