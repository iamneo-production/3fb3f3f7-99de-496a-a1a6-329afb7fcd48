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

    public List<LoginModel> getAllUsers(){
       return loginRepository.findAll();
    }

    public boolean verifyLogin(LoginModel loginModel){
        System.out.println("LoginModel{{}} " + loginModel.getEmail());
        System.out.println("LoginModel{{}} " + loginModel.getPassword());
        EmployeeModel employeeModel = employeeRepository.findByEmail(loginModel.getEmail());
        if(employeeModel!=null){
            if(employeeModel.getEmail() == loginModel.getEmail()){
                if(employeeModel.getPassword() == loginModel.getPassword()){
                    return true;
                }  else {
                    return false;
                }
            } else {
                return false; }
        } else {
            System.out.println("Employee not found");
            return false;
        }
      
    }
}
