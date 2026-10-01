package com.example.EmployeeManagementSystem.Repository;

import com.example.EmployeeManagementSystem.Entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    List<Employee> findByFirstNameContainingIgnoreCase(String firstName);
    Page<Employee> findByFirstNameContainingIgnoreCase(String firstName, Pageable pageable);
    List<Employee> findByDepartmentId(Long departmentId);
}
