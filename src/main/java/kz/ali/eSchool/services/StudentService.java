package kz.ali.eSchool.services;

import kz.ali.eSchool.models.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student getStudent(Long id);
    void deleteStudent(Long id);
    void addStudent(Student student);
}
