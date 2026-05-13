package com.lealsoftlabs.gerencia.modules.appointments.repository;

import com.lealsoftlabs.gerencia.modules.appointments.domain.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AppointmentRepository
        extends JpaRepository<Appointment, UUID> {
}