package com.lealsoftlabs.gerencia.modules.auth.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class AuthUser extends BaseEntity {

    private String name;

    private String email;

    private String password;

    private String role;
}