package com.lealsoftlabs.gerencia.modules.appointments.service;

import com.lealsoftlabs.gerencia.modules.appointments.domain.Appointment;

import com.lealsoftlabs.gerencia.modules.appointments.dto.AppointmentResponseDTO;
import com.lealsoftlabs.gerencia.modules.appointments.dto.CreateAppointmentDTO;

import com.lealsoftlabs.gerencia.modules.appointments.repository.AppointmentRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentResponseDTO create(
            CreateAppointmentDTO dto
    ) {

        Appointment appointment = new Appointment();

        appointment.setCompanyId(dto.companyId());

        appointment.setClientName(dto.clientName());

        appointment.setProfessionalName(dto.professionalName());

        appointment.setAppointmentDate(dto.appointmentDate());

        appointment.setStatus("PENDING");

        Appointment saved =
                repository.save(appointment);

        return new AppointmentResponseDTO(
                saved.getId(),
                saved.getClientName(),
                saved.getProfessionalName(),
                saved.getAppointmentDate(),
                saved.getStatus()
        );
    }
}