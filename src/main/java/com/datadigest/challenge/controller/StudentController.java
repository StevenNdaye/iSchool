package com.datadigest.challenge.controller;

import com.datadigest.challenge.entity.Student;
import com.datadigest.challenge.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(method = RequestMethod.POST)
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Student> findStudents() {
        return studentService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, params = "className")
    public List<Student> getStudentByClassName(@RequestParam("className") String className) {
        return studentService.getStudentByClassName(className);
    }

}
