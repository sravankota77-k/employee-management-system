# Employee Management System

## Project Overview

The Employee Management System is a full-stack web application built using Spring Boot and React.js. The system streamlines employee and department management through a secure role-based platform. It enables administrators to manage organizational data while providing controlled access to standard users.

The application follows a client-server architecture using React.js for the frontend, Spring Boot for backend services, MySQL for data persistence, and JWT Authentication for security.

---

## Key Features

- Employee CRUD Operations
- Department CRUD Operations
- User Management
- JWT Authentication
- Role-Based Access Control (RBAC)
- Search Functionality
- Sorting
- Pagination
- Dashboard Analytics
- Secure REST APIs

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Security
- JWT
- Hibernate / JPA
- MySQL
- Maven

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router DOM

### Tools
- Git
- GitHub
- Postman
- IntelliJ IDEA
- VS Code

---

# Role-Based Access Control (RBAC)

The application uses JWT Authentication and Spring Security to enforce role-based authorization.

## Admin Permissions

Admins can:

- Add Employees
- Update Employees
- Delete Employees
- Manage Departments
- View Users
- Search Records
- Sort Records
- View Dashboard Statistics

## User Permissions

Users can:

- Access Dashboard
- View Employees
- View Departments
- View Users
- Search Employee Records
- Search Department Records
- Search User Records
- View Dashboard Statistics

---

## Project Architecture

```text
React.js Frontend
        ↓
REST APIs
        ↓
Spring Boot Backend
        ↓
Spring Security + JWT
        ↓
MySQL Database

```

---

# Application Screenshots

## Login Page

Secure authentication using username and password. JWT tokens are generated upon successful login.

<img width="1917" height="977" alt="image" src="https://github.com/user-attachments/assets/aa7b202d-d7e0-469e-97c7-23d2058c83ce" />


---

## Admin Dashboard

Displays key statistics such as employee count, department count, admin count, and user count.

<img width="1917" height="976" alt="image" src="https://github.com/user-attachments/assets/3d71d34c-af0a-47d1-8757-6245feea8ec5" />


---

## Employee Management Module

Allows administrators to perform Create, Read, Update, and Delete operations on employee records.

Features:
- Search Employees
- Sorting
- Pagination
- CRUD Operations

<img width="1917" height="962" alt="image" src="https://github.com/user-attachments/assets/35f47f47-5125-43dd-aebd-95f569131b8b" />


---

## Department Management Module

Manages organizational departments with complete CRUD functionality.

Features:
- Department Creation
- Department Update
- Department Deletion
- Search and Sorting

<img width="1917" height="973" alt="image" src="https://github.com/user-attachments/assets/b6b010fa-ea67-429a-93e1-d67bef0167e9" />


---

## User Management Module

Displays registered system users and their assigned roles while supporting search and role visibility features.

Features:
- User Listing
- Role Visibility
- User Search
- Access Monitoring

<img width="1917" height="983" alt="image" src="https://github.com/user-attachments/assets/487e7a04-a7b4-40b7-8c9e-f2dc317c4c30" />


---

## User Dashboard

Provides users with a centralized dashboard to access organizational information based on assigned permissions.

Features:
- View Total Admin Count
- View Total User Count
- Access Employee Module
- Access Department Module
- Access User Module
- Secure JWT Authentication

<img width="1917" height="977" alt="image" src="https://github.com/user-attachments/assets/826b0175-3b6c-43de-ad65-94baee5741da" />

---
## User Employee Module

Allows users to view employee information available within the system.

Features:
- View Employee Records
- Search Employees
- Employee Information Access
- Read-Only Access

<img width="1917" height="982" alt="image" src="https://github.com/user-attachments/assets/58d4b3f7-bd6e-4803-823a-fcb789fa3baf" />

---

## User Department Module

Allows users to view department information within the organization.

Features:
- View Department Records
- Search Departments
- Department Information Access
- Read-Only Access

<img width="1915" height="973" alt="image" src="https://github.com/user-attachments/assets/b9479c2d-b186-4bdf-962a-35b2a7e110a1" />

---

## User Management View

Allows users to view registered system users and their assigned roles.

Features:
- View User Records
- Search Users
- Role Visibility
- Read-Only Access

<img width="1917" height="975" alt="image" src="https://github.com/user-attachments/assets/ed971b23-a1da-4b7b-8de2-25028e1cc806" />

---


## Installation & Setup

### Backend

```bash
git clone https://github.com/sravankota77-k/employee-management-system.git
cd EmployeeManagementSystem
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database

Configure MySQL credentials in:

```properties
src/main/resources/application.properties
```


## Security Features

- JWT Authentication
- Spring Security Integration
- Role-Based Access Control
- Protected REST APIs
- BCrypt Password Encryption

---

## Author

**Kota Sravan Kumar**

📧 Email: sravankota77@gmail.com

🔗 GitHub: [sravankota77-k](https://github.com/sravankota77-k)
