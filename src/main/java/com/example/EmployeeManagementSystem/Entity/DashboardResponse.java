package com.example.EmployeeManagementSystem.Dto;

public class DashboardResponse {

    private long employees;
    private long departments;
    private long users;

    public DashboardResponse(
            long employees,
            long departments,
            long users) {

        this.employees = employees;
        this.departments = departments;
        this.users = users;
    }

    public long getEmployees() {
        return employees;
    }

    public long getDepartments() {
        return departments;
    }

    public long getUsers() {
        return users;
    }
}