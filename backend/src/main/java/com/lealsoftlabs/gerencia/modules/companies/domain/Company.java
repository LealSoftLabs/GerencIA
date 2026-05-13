package com.lealsoftlabs.gerencia.modules.companies.domain;

import com.lealsoftlabs.gerencia.shared.base.BaseEntity;

import jakarta.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Company extends BaseEntity {

    private String name;

    private String email;

    private String phone;

    private String plan;
}