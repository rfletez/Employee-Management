package com.spring.BackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.BackEnd.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}