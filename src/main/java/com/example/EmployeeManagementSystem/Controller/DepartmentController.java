package com.example.EmployeeManagementSystem.Controller;
import com.example.EmployeeManagementSystem.Entity.Department;
import com.example.EmployeeManagementSystem.Dto.DepartmentDto;
import com.example.EmployeeManagementSystem.Service.DepartmentService;
import com.example.EmployeeManagementSystem.Entity.Employee;
import com.example.EmployeeManagementSystem.Service.EmployeeService;
import com.example.EmployeeManagementSystem.Exception.ResourceNotFoundException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@Tag(name = "Department APIs", description = "Operation Related To Department Management")
@RestController
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;
    @Autowired
    private EmployeeService employeeService;
    @Operation(summary = "Get All Departments")
    @GetMapping
    public ResponseEntity<List<Department>> getAllDepartment() {
        List<Department> departments = departmentService.getAllDepartment();
        return ResponseEntity.ok(departments);
    }

    @Operation(summary = "Get Department By Id")
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable Long id) {
        Department department = departmentService.getDepartmentById(id).orElseThrow(() ->new ResourceNotFoundException("Department Not Found"));
        DepartmentDto dto = departmentService.convertToDto(department);
        return ResponseEntity.ok(dto);
    }

    @Operation(summary = "Get Employees By Department")
    @GetMapping("/{id}/employees")
    public ResponseEntity<List<Employee>> getEmployeesByDepartment(@PathVariable Long id) {
        return ResponseEntity.ok(employeeService.getEmployeesByDepartment(id));
    }

    @Operation(summary = "Search Departments")
    @GetMapping("/search")
    public ResponseEntity<List<Department>> searchDepartment(
            @RequestParam String name) {

        return ResponseEntity.ok(
                departmentService.searchDepartment(name)
        );
    }

    @Operation(summary = "Get Departments With Pagination")
    @GetMapping("/page")
    public ResponseEntity<Page<Department>> getDepartment(@RequestParam int page,@RequestParam int size) {
        return ResponseEntity.ok(departmentService.getDepartment(page, size));
    }

    @Operation(summary = "Get Departments Sorted")
    @GetMapping("/sort")
    public ResponseEntity<List<Department>> getDepartmentSorted(@RequestParam String field) {
        return ResponseEntity.ok(departmentService.getDepartmentSorted(field));
    }

    @Operation(summary = "Search, Sort and Pagination")
    @GetMapping("/filter")
    public ResponseEntity<Page<Department>> getDepartment(@RequestParam String name,@RequestParam int page,@RequestParam int size,@RequestParam String sortField, @RequestParam String direction) {
        return ResponseEntity.ok(
                departmentService.getDepartment(name,page,size,sortField, direction)
        );
    }

    @Operation(summary = "Add Department")
    @PostMapping
    public ResponseEntity<Department> saveDepartment(@Valid @RequestBody Department department) {
        Department savedDepartment =departmentService.saveDepartment(department);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDepartment);
    }

    @Operation(summary = "Update Department By Id")
    @PutMapping("/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable Long id,@RequestBody Department department) {
        Department currentDepartment = departmentService.getDepartmentById(id).orElseThrow(() -> new ResourceNotFoundException("Department Not Found"));
        currentDepartment.setName(department.getName());
        Department updatedDepartment =departmentService.saveDepartment(currentDepartment);
        return ResponseEntity.ok(updatedDepartment);
    }

    @Operation(summary = "Delete Department By Id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return ResponseEntity.noContent().build();
    }
}