package com.datadigest.challenge.repository;

import com.datadigest.challenge.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    List<Attendance> findByDate(LocalDate attendanceDate);
    List<Attendance> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
