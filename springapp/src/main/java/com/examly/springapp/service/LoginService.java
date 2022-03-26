package com.examly.springapp.service;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repository.*;
import com.examly.springapp.model.*;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.*;
import java.util.*;

@Service
public class LoginService {    
   
    private LoginRepository loginRepository;
    private EmployeeRepository employeeRepository;

    public LoginService(LoginRepository loginRepository,EmployeeRepository employeeRepository){
        this.loginRepository = loginRepository;
        this.employeeRepository = employeeRepository;
    }

    public List<LoginModel> getAllUsers(String id){
        System.out.println("id " + id);
       return loginRepository.findById(id);
    }

    public String verifyLogin(LoginModel loginModel){
        System.out.println("LoginModel{{}} " + loginModel);
        EmployeeModel employeeModel = employeeRepository.findByEmail(loginModel.getEmail());
        if(employeeModel.getEmail() == loginModel.getEmail()){
            if(employeeModel.getPassword() == loginModel.getPassword()){
                return "Login Succesful";
            }  else {
                return "email and password is mismatching";
            }
        } else {
            return "please enter correct mail";
        }
    }
}
