package com.example.EmployeeManagementSystem;

import com.example.EmployeeManagementSystem.Entity.Employee;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EmployeeServiceTest {

    @Test
    void testSample(){
        System.out.println("jUnit is Woorking");;
    }

    @Test
    void addition(){
        int result = 10 + 20;
        assertEquals(30,result);
    }

    @Test
    void testEmployeeDto(){
        Employee employee = new Employee();
        employee.setId(1L);
        employee.setFirstName("Sravan");
        employee.setLastName("Kota");
        employee.setEmail("sravan@gmail.com");

        assertEquals("Sravan",employee.getFirstName());
        assertEquals("Kota",employee.getLastName());
    }
}
