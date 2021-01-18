package kz.ali.eSchool.Service;

import kz.ali.eSchool.models.Student;
import kz.ali.eSchool.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.Test;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

@Test
@ContextConfiguration(locations = {"classpath:spring-test-config.xml"})
public class StudentServiceTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private StudentService studentService;

    @Test
    void getAllStudentTest(){
        //Clear data of table
        studentService.truncateTable();

        List<Student> students = new ArrayList<>();

        //Three students for test
        Student student_f = new Student(1L, "Student", "First", "student_f@email.kz", "Good");
        Student student_s = new Student(2L, "Student", "Second", "student_s@email.kz", "Bad");
        Student student_t = new Student(3L, "Student", "Third", "student_t@email.kz", "Excellent");

        //Adding students to ArrayList
        students.add(student_f);
        students.add(student_s);
        students.add(student_t);
        
        //Adding students to DataBase
        studentService.addStudent(student_f);
        studentService.addStudent(student_s);
        studentService.addStudent(student_t);
        
        //Getting students from DataBase
        List<Student> students_db = studentService.getAll();

        for (int i = 0; i < 3; i++){
            assertThat(students_db.get(i).getFirstName()).isEqualTo(students.get(i).getFirstName());
            assertThat(students_db.get(i).getLastName()).isEqualTo(students.get(i).getLastName());
            assertThat(students_db.get(i).getEmail()).isEqualTo(students.get(i).getEmail());
            assertThat(students_db.get(i).getPerformance()).isEqualTo(students.get(i).getPerformance());
        }
        
    }
}
