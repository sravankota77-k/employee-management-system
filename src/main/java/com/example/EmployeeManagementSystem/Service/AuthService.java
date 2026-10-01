package com.example.EmployeeManagementSystem.Service;

import com.example.EmployeeManagementSystem.Dto.LoginRequestDto;
import com.example.EmployeeManagementSystem.Dto.LoginResponseDto;
import com.example.EmployeeManagementSystem.Dto.RegisterRequestDto;
import com.example.EmployeeManagementSystem.Entity.AppUser;
import com.example.EmployeeManagementSystem.Exception.ResourceNotFoundException;
import com.example.EmployeeManagementSystem.Repository.UserRepository;
import com.example.EmployeeManagementSystem.Secutiy.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public LoginResponseDto login(LoginRequestDto request){
        AppUser user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new ResourceNotFoundException("User Not Found"));
        if(passwordEncoder.matches(request.getPassword(),(user.getPassword()))){
            String token = jwtUtil.generateToken(user.getUsername(),user.getRole());
            return new LoginResponseDto(token,user.getRole());
        }
        throw new RuntimeException("Invalid Password");
    }

    public AppUser register(RegisterRequestDto request){
        if(userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new RuntimeException("User Already Exists");
        }
        AppUser user = new AppUser();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");
        return userRepository.save(user);
    }
}
