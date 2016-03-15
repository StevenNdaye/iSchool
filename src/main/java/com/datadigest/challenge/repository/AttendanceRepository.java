package com.datadigest.challenge.repository;

import com.datadigest.challenge.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    List<Attendance> findByStudentRegisteredToAndDate(String className, Date attendanceDate);

    List<Attendance> findByStudentRegisteredToAndDateBetween(String className, Object startDate, Object endDate);
}
