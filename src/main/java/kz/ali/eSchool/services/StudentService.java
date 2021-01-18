package kz.ali.eSchool.services;

import kz.ali.eSchool.models.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    void deleteStudent(Long id);
    void addStudent(Student student);
    void truncateTable();
}
