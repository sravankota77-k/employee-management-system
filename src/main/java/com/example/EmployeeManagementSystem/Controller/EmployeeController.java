package com.example.EmployeeManagementSystem.Controller;

import com.example.EmployeeManagementSystem.Entity.Employee;
import com.example.EmployeeManagementSystem.Dto.EmployeeDto;
import com.example.EmployeeManagementSystem.Service.EmployeeService;
import com.example.EmployeeManagementSystem.Exception.ResourceNotFoundException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Employee APIs",description = "Operation Related On Employee Mangament")
@RestController
@RequestMapping("/employees")
public class  EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Operation(summary = "Get All Employees")
//    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employee = employeeService.getAllEmployees();
        return ResponseEntity.ok(employee);
    }
    @Operation(summary = "Get Employee By Search")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/search")
    public ResponseEntity<List<Employee>> searchEmployee(@RequestParam String firstName){
        return ResponseEntity.ok(employeeService.searchEmployee(firstName));
    }
    @Operation(summary = "Get Employee By Page")
//    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/page")
    public ResponseEntity<Page<Employee>> getEmployees(@RequestParam int page,@RequestParam int size){
        return ResponseEntity.ok(employeeService.getEmployees(page,size));
    }

    @Operation(summary = "Get Employee By Id")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable Long id){
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        if(employee.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        EmployeeDto dto = employeeService.convertToDto(employee.get());
        return ResponseEntity.ok(dto);
    }
    @Operation(summary = "Add Employee")
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee employee){
        Employee savedEmployee = employeeService.saveEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
    }
    @Operation(summary = "Get Employee By Sort")
    @GetMapping("/sort")
    public ResponseEntity<List<Employee>> getEmployeeSorted(@RequestParam String field){
        return ResponseEntity.ok(employeeService.getEmployeeSorted(field));
    }
    @Operation(summary = "Get Employee By Search,Sorting and Pagination")
    @GetMapping("/filter")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    public ResponseEntity<Page<Employee>> getEmployees(@RequestParam String firstName,@RequestParam int page,@RequestParam int size,@RequestParam String sortField,@RequestParam String direction){
        return ResponseEntity.ok(employeeService.getEmployees(firstName,page,size,sortField,direction));
    }
    @Operation(summary = "Delete Employee By Id")
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }


    @Operation(summary = "Update Employee By Id")
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
        Employee currEmployee = employeeService.getEmployeeById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
        currEmployee.setFirstName(employee.getFirstName());
        currEmployee.setLastName(employee.getLastName());
        currEmployee.setEmail(employee.getEmail());
        currEmployee.setSalary(employee.getSalary());
        currEmployee.setImageUrl(employee.getImageUrl());
        Employee updatedEmployee = employeeService.saveEmployee(currEmployee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{employeeId}/department/{departmentId}")
    public ResponseEntity<Employee> assignDepartemnt(@PathVariable Long employeeId,@PathVariable Long departmentId){
        Employee employee = employeeService.assignDepartemnt(employeeId,departmentId);
        return ResponseEntity.ok(employee);
    }
}
