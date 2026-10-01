package com.example.EmployeeManagementSystem.Controller;


import com.example.EmployeeManagementSystem.Dto.LoginRequestDto;
import com.example.EmployeeManagementSystem.Dto.LoginResponseDto;
import com.example.EmployeeManagementSystem.Dto.RegisterRequestDto;
import com.example.EmployeeManagementSystem.Entity.AppUser;
import com.example.EmployeeManagementSystem.Service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@Valid @RequestBody LoginRequestDto request){
        LoginResponseDto response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<AppUser> register(@Valid @RequestBody RegisterRequestDto request){
        AppUser user = authService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
