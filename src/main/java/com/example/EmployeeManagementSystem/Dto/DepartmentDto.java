package com.example.EmployeeManagementSystem.Dto;

public class DepartmentDto {

    private Long id;
    private String name;
    public DepartmentDto(){

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
