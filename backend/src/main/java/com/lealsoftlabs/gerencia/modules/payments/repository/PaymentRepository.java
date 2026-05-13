package com.lealsoftlabs.gerencia.modules.payments.repository;

import com.lealsoftlabs.gerencia.modules.payments.domain.Payment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PaymentRepository
        extends JpaRepository<Payment, UUID> {
}