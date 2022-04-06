package com.examly.springapp.model;
import java.lang.annotation.Inherited;

import javax.annotation.processing.Generated;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "Feedback")
public class FeedbackModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    private String name;
    private String email;
    private Long mobileNumber;
    private String suggestions;
    private String complaints;

    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Long getMobileNumber() {
        return mobileNumber;
    }
   
    public void setMobileNumber(Long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    public String getSuggestions() {
        return suggestions;
    }
    public void setSuggestions(String suggestions) {
        this.suggestions = suggestions;
    }
    public String getComplaints() {
        return complaints;
    }
    public void setComplaints(String complaints) {
        this.complaints = complaints;
    }
    public FeedbackModel(Long id, String name, String email, Long mobileNumber, String suggestions,
            String complaints) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.suggestions = suggestions;
        this.complaints = complaints;
    }
    public FeedbackModel() {
    }


    
}
