package com.example.EmployeeManagementSystem.Service;

import com.example.EmployeeManagementSystem.Entity.Department;
import com.example.EmployeeManagementSystem.Dto.DepartmentDto;
import com.example.EmployeeManagementSystem.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;
    public List<Department> getAllDepartment(){

        return departmentRepository.findAll();
    }
    public Optional<Department> getDepartmentById(Long id){
        return departmentRepository.findById(id);
    }

    public void deleteDepartment(Long id){
        departmentRepository.deleteById(id);
    }

    public Department saveDepartment(Department department){
        return departmentRepository.save(department);
    }

    public List<Department> searchDepartment(String name){
        return departmentRepository.findByNameContainingIgnoreCase(name);
    }

    public Page<Department> getDepartment(int page,int size){
        Pageable pegeable = PageRequest.of(page,size);
        return departmentRepository.findAll(pegeable);
    }
    public List<Department> getDepartmentSorted(String field){
        return departmentRepository.findAll(Sort.by(field));
    }

    public Page<Department> getDepartment(String firstName,int page,int size,String sortField,String direction){
        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortField).descending() : Sort.by(sortField).ascending();
        Pageable pageable = PageRequest.of(page,size,sort);
        return departmentRepository.findByNameContainingIgnoreCase(firstName,pageable);
    }
    public Department updateDepartment(Department department){
        return departmentRepository.save(department);
    }

    public DepartmentDto convertToDto(Department department){
        DepartmentDto dto = new DepartmentDto();
        dto.setName(department.getName());
        dto.setId(department.getId());
        return dto;
    }
}
