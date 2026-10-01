package com.example.EmployeeManagementSystem.Service;


import com.example.EmployeeManagementSystem.Dto.EmployeeDto;
import com.example.EmployeeManagementSystem.Entity.Department;
import com.example.EmployeeManagementSystem.Entity.Employee;
import com.example.EmployeeManagementSystem.Exception.ResourceNotFoundException;
import com.example.EmployeeManagementSystem.Repository.DepartmentRepository;
import com.example.EmployeeManagementSystem.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id){
        return employeeRepository.findById(id);
    }

    public void deleteEmployee(Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee Not Found"));
        employeeRepository.delete(employee);
    }

    public List<Employee> searchEmployee(String firstName){
        return employeeRepository.findByFirstNameContainingIgnoreCase(firstName);
    }

    public Page<Employee> getEmployees(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return employeeRepository.findAll(pageable);
    }

    public Page<Employee> getEmployees(String firstName,int page,int size,String sortField,String direction){
        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortField).descending() : Sort.by(sortField).ascending();
        Pageable pageable = PageRequest.of(page,size,sort);
        return employeeRepository.findByFirstNameContainingIgnoreCase(firstName,pageable);
    }

    public List<Employee> getEmployeeSorted(String field){
        return employeeRepository.findAll(Sort.by(field));
    }
    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public EmployeeDto convertToDto(Employee employee){
        EmployeeDto dto = new EmployeeDto();
        dto.setId(employee.getId());
        dto.setFirstName(employee.getFirstName());
        dto.setLastName(employee.getLastName());
        dto.setEmail(employee.getEmail());
        return dto;
    }

    public Employee assignDepartemnt(Long employeeId,Long departmentId){
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
        Department department = departmentRepository.findById(departmentId).orElseThrow(()-> new ResourceNotFoundException("Department Not Found"));
        employee.setDepartment(department);
        return employeeRepository.save(employee);
    }

    public List<Employee> getEmployeesByDepartment(Long departmentId){
        return employeeRepository.findByDepartmentId(departmentId);
    }
}
