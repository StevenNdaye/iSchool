package com.datadigest.challenge.controller;

import com.datadigest.challenge.entity.Attendance;
import com.datadigest.challenge.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @RequestMapping(method = RequestMethod.POST)
    public List<Attendance> processAttendance(@RequestBody List<Attendance> attendanceList) {
        return attendanceService.processAttendance(attendanceList);
    }


}
