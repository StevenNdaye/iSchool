package com.datadigest.challenge.service;

import com.datadigest.challenge.entity.Student;
import com.datadigest.challenge.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.saveAndFlush(student);
    }
}
