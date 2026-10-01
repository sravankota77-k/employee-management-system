package com.example.EmployeeManagementSystem.Service;

import com.example.EmployeeManagementSystem.Entity.AppUser;
import com.example.EmployeeManagementSystem.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public long getAdminCount() {
        return userRepository.countByRole("ADMIN");
    }

    public long getUserCount() {
        return userRepository.countByRole("USER");
    }
    public List<AppUser> getAllUsers(){
        return userRepository.findAll();
    }

    public List<AppUser> searchUser(
            String username
    ) {
        return userRepository
                .findByUsernameContainingIgnoreCase(
                        username
                );
    }
}