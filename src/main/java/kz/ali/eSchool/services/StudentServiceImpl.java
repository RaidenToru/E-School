package kz.ali.eSchool.services;

import kz.ali.eSchool.models.Student;
import kz.ali.eSchool.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.delete(id);
    }

    @Override
    public void addStudent(Student student) {
        studentRepository.add(student);
    }

    @Override
    public void truncateTable() {
        studentRepository.truncateTable();
    }
}
