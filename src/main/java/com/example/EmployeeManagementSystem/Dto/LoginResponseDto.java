package com.example.EmployeeManagementSystem.Dto;

public class LoginResponseDto {
    private String token;
    private String role;
    public LoginResponseDto(){}

    public LoginResponseDto(String token,String role){
        this.token = token;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public String getRole() {
        return role;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
