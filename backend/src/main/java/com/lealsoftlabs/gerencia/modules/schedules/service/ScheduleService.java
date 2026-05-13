package com.lealsoftlabs.gerencia.modules.schedules.service;

import com.lealsoftlabs.gerencia.modules.schedules.domain.Schedule;

import com.lealsoftlabs.gerencia.modules.schedules.dto.CreateScheduleDTO;
import com.lealsoftlabs.gerencia.modules.schedules.dto.ScheduleResponseDTO;

import com.lealsoftlabs.gerencia.modules.schedules.repository.ScheduleRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScheduleService {

    private final ScheduleRepository repository;

    public ScheduleResponseDTO create(
            CreateScheduleDTO dto
    ) {

        Schedule schedule = new Schedule();

        schedule.setCompanyId(dto.companyId());

        schedule.setProfessionalId(dto.professionalId());

        schedule.setDate(dto.date());

        schedule.setStartTime(dto.startTime());

        schedule.setEndTime(dto.endTime());

        schedule.setAvailable(true);

        Schedule saved =
                repository.save(schedule);

        return new ScheduleResponseDTO(
                saved.getId(),
                saved.getProfessionalId(),
                saved.getDate(),
                saved.getStartTime(),
                saved.getEndTime(),
                saved.getAvailable()
        );
    }
}