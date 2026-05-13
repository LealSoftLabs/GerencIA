package com.lealsoftlabs.gerencia.modules.professionals.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Professional extends BaseEntity {

    private UUID companyId;

    private String name;

    private String email;

    private String phone;

    private String specialty;

    private Boolean active;
}