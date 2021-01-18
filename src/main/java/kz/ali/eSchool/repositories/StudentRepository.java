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

    @Delete("DELETE FROM students WHERE id = #{id}")
    void delete(Long id);

    @Insert("INSERT INTO students (firstName, lastName, email, performance) " +
            "VALUES(#{firstName}, #{lastName}, #{email}, #{performance})")
    void add(Student student);

}
