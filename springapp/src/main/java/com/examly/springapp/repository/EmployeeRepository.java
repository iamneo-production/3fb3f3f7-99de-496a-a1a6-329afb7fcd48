package com.examly.springapp.repository;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.model.*;
import org.springframework.http.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;
import org.springframework.beans.factory.annotation.*;
import java.util.*;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeModel,Long> {

    List<EmployeeModel> findAll(); 
    List<EmployeeModel> findById(String id);
    EmployeeModel findByEmail(String email);
}
