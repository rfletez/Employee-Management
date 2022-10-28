package com.spring.BackEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.BackEnd.entity.Employee;
import com.spring.BackEnd.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepo.findAll();
	}

}