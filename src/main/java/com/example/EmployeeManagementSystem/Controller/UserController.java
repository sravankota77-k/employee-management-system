package com.example.EmployeeManagementSystem.Controller;

import com.example.EmployeeManagementSystem.Entity.AppUser;
import com.example.EmployeeManagementSystem.Service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/users/admin-count")
    public long getAdminCount() {
        return userService.getAdminCount();
    }

    @GetMapping("/api/users/user-count")
    public long getUserCount() {
        return userService.getUserCount();
    }

    @GetMapping("/api/users/all")
    public List<AppUser> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/api/users/search")
    public List<AppUser> searchUser(
            @RequestParam String username
    )
    {
        return userService.searchUser(username);
    }
}