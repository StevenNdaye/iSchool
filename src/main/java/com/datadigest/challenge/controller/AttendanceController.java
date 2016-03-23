package com.datadigest.challenge.controller;

import com.datadigest.challenge.entity.Attendance;
import com.datadigest.challenge.helpers.DateHelper;
import com.datadigest.challenge.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.datadigest.challenge.helpers.DateHelper.toDate;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @RequestMapping(method = RequestMethod.POST)
    public List<Attendance> processAttendance(@RequestBody List<Attendance> attendanceList) {
        return attendanceService.processAttendance(attendanceList);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"className", "attendanceDate"})
    public List<Attendance> getAttendanceListForASpecificDate(@RequestParam("className") String className,
                                                              @RequestParam("attendanceDate")
                                                              String attendanceDate) {
        return attendanceService.getAttendanceListBy(className, toDate(attendanceDate));
    }


    @RequestMapping(method = RequestMethod.GET, params = {"className", "term"})
    public List<Attendance> getAttendanceListByTerm(@RequestParam("className") String className, @RequestParam("term") int term) {
        return attendanceService.getAttendanceListBy(className, term);
    }


}
