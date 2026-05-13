package com.lealsoftlabs.gerencia.modules.payments.controller;

import com.lealsoftlabs.gerencia.modules.payments.dto.CreatePaymentDTO;
import com.lealsoftlabs.gerencia.modules.payments.dto.PaymentResponseDTO;

import com.lealsoftlabs.gerencia.modules.payments.service.PaymentService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<PaymentResponseDTO> create(

            @RequestBody CreatePaymentDTO dto
    ) {

        return ResponseEntity.ok(
                paymentService.create(dto)
        );
    }
}