package com.example.EmployeeManagementSystem.Controller;

import com.example.EmployeeManagementSystem.Dto.DashboardResponse;
import com.example.EmployeeManagementSystem.Repository.DepartmentRepository;
import com.example.EmployeeManagementSystem.Repository.EmployeeRepository;
import com.example.EmployeeManagementSystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

public class DashboardController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/stats")
    public DashboardResponse getStats() {

        return new DashboardResponse(
                employeeRepository.count(),
                departmentRepository.count(),
                userRepository.count()
        );
    }
}
