package com.example.EmployeeManagementSystem.Dto;
import java.time.LocalDateTime;

public class ErrorResponseDto {
    private LocalDateTime timestamp;
    private int status;
    private String message;

    public ErrorResponseDto(LocalDateTime timestamp,int status,String message){
        this.timestamp = timestamp;
        this.status = status;
        this.message = message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
