package com.examly.springapp.service;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repository.*;
import com.examly.springapp.model.*;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.*;
import java.util.*;

@Service
public class EmployeeService {    
   
    private EmployeeRepository employeeRepository;
    private CustomerRepository customerRepository;
    private RouteRepository routeRepository;

    public EmployeeService(EmployeeRepository employeeRepository, CustomerRepository customerRepository,RouteRepository routeRepository){
        this.employeeRepository = employeeRepository;
        this.customerRepository = customerRepository;
        this.routeRepository = routeRepository;
    }

    public List<EmployeeModel> getAllEmployees(String id){
        System.out.println("id " + id);
       EmployeeModel employeeModel = new EmployeeModel() ;
       employeeModel.setId("1");
       employeeModel.setUserName("user");

       employeeRepository.save(employeeModel);
       return employeeRepository.findById("1");
    }

    public void addEmployee(EmployeeModel employeeModel){
        
       employeeRepository.save(employeeModel);
    }

    public CustomerModel updateCustomer(String customerId, CustomerModel customerModel){
               
        customerRepository.save(customerModel);
        customerRepository.findByCustomerId(customerId);
        customerModel.setCustomerId(customerId);
        customerRepository.save(customerModel);
        return customerModel;
     }

     public RouteModel addRoutes(RouteModel routeModel){
        routeRepository.save(routeModel);
        return routeModel;
     }

     
     public RouteModel editRoutes(String id, RouteModel routeModel){
        routeRepository.save(routeModel);
        routeRepository.findByRouteId(id);
        routeModel.setRouteId(id);
        routeRepository.save(routeModel);
        return routeModel;
     }
}
