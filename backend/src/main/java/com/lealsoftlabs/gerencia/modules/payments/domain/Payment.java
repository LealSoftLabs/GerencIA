package com.lealsoftlabs.gerencia.modules.payments.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Payment extends BaseEntity {

    private UUID companyId;

    private Double amount;

    private String method;

    private String status;

    private String description;
}