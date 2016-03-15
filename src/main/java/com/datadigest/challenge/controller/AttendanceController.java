package com.datadigest.challenge.controller;

import com.datadigest.challenge.entity.Attendance;
import com.datadigest.challenge.entity.Student;
import com.datadigest.challenge.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
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

    @RequestMapping(method = RequestMethod.GET, params = "attendanceDate")
    public List<Attendance> getAttendanceListForASpecificDate(@RequestParam("attendanceDate") LocalDate attendanceDate) {
        return attendanceService.getAttendanceListBy(attendanceDate);
    }

    @RequestMapping(method = RequestMethod.GET, params = "term")
    public List<Attendance> getAttendanceListByTerm(@RequestParam("term") int term) {
        return attendanceService.getAttendanceListBy(term);
    }


}
