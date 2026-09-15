package com.narendra.homeopathy.repository;

import com.narendra.homeopathy.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
