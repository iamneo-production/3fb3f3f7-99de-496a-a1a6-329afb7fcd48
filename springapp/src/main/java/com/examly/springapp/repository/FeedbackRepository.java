package com.examly.springapp.repository;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.model.*;
import org.springframework.http.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;
import org.springframework.beans.factory.annotation.*;
import java.util.*;

@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackModel,Long> {

    List<FeedbackModel> findAll(); 
    FeedbackModel findEmployeeById(String id);
    List<FeedbackModel> deleteEmployeeById(String id);
    FeedbackModel findByEmail(String email);
}
