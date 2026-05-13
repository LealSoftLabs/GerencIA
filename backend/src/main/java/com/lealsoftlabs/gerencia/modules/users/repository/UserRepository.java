package com.lealsoftlabs.gerencia.modules.users.repository;

import com.lealsoftlabs.gerencia.modules.auth.domain.AuthUser;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository
        extends JpaRepository<AuthUser, UUID> {
}