package com.lealsoftlabs.gerencia.modules.schedules.repository;

import com.lealsoftlabs.gerencia.modules.schedules.domain.Schedule;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ScheduleRepository
        extends JpaRepository<Schedule, UUID> {
}