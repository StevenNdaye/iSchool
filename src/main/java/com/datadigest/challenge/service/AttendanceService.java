package com.datadigest.challenge.service;

import com.datadigest.challenge.entity.Attendance;
import com.datadigest.challenge.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> processAttendance(List<Attendance> attendanceList) {
        return attendanceRepository.save(attendanceList);
    }
}
