package kz.ali.eSchool.repositories;

import kz.ali.eSchool.models.Student;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface StudentRepository {

    @Select("SELECT * FROM students")
    List<Student> findAll();

    @Select("SELECT * FROM students WHERE id = #id")
    Student findById(Long id);

    @Delete("DELETE FROM students WHERE id = #id")
    void delete(Long id);

    @Insert("INSERT INTO students (firstName, lastName, email, class) " +
            "VALUES(#{firstName}, #{lastName}, #{email}, #{class})")
    void add(Student student);

}
