package com.lealsoftlabs.gerencia.modules.payments.service;

import com.lealsoftlabs.gerencia.modules.payments.domain.Payment;

import com.lealsoftlabs.gerencia.modules.payments.dto.CreatePaymentDTO;
import com.lealsoftlabs.gerencia.modules.payments.dto.PaymentResponseDTO;

import com.lealsoftlabs.gerencia.modules.payments.repository.PaymentRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository repository;

    public PaymentResponseDTO create(
            CreatePaymentDTO dto
    ) {

        Payment payment = new Payment();

        payment.setCompanyId(dto.companyId());

        payment.setAmount(dto.amount());

        payment.setMethod(dto.method());

        payment.setDescription(dto.description());

        payment.setStatus("PENDING");

        Payment saved =
                repository.save(payment);

        return new PaymentResponseDTO(
                saved.getId(),
                saved.getAmount(),
                saved.getMethod(),
                saved.getStatus(),
                saved.getDescription()
        );
    }
}