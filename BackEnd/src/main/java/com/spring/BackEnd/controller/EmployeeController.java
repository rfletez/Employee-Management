package com.spring.BackEnd.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.BackEnd.entity.Employee;
import com.spring.BackEnd.exception.ResourceNotFoundException;
import com.spring.BackEnd.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
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
	
	//get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeByID(@PathVariable("id") Long id) {
		Employee emp = employeeRepo.findById(id).orElseThrow(() -> 
			new ResourceNotFoundException("Employee does not exist with id: " + id));
		
		return ResponseEntity.ok(emp);
	}
	
	//create an employee REST API
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}
	
	//update an employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee empDetails) {
		Employee emp = employeeRepo.findById(id).orElseThrow(() -> 
			new ResourceNotFoundException("Employee does not exist with id: " + id));
		
		emp.setFirstName(empDetails.getFirstName());
		emp.setLastName(empDetails.getLastName());
		emp.setEmailId(empDetails.getEmailId());
		
		Employee updatedEmployee = employeeRepo.save(emp);
		
		return ResponseEntity.ok(updatedEmployee);
	}

}