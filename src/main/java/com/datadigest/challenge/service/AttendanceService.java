package com.datadigest.challenge.service;

import com.datadigest.challenge.entity.Attendance;
import com.datadigest.challenge.entity.Student;
import com.datadigest.challenge.helpers.DateHelper;
import com.datadigest.challenge.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> processAttendance(List<Attendance> attendanceList) {
        return attendanceRepository.save(attendanceList);
    }

    public List<Attendance> getAttendanceListBy(String className, LocalDate attendanceDate) {
        return attendanceRepository.findByStudentRegisteredToAndDate(className, attendanceDate);
    }

    public List<Attendance> getAttendanceListBy(String className, int term) {
        Map<String, LocalDate> datesBasedOnTerm = DateHelper.getDatesBasedOnTerm(term);
        return attendanceRepository.findByStudentRegisteredByAndDateBetween(className, datesBasedOnTerm.get("startDate"), datesBasedOnTerm.get("endDate"));
    }
}
