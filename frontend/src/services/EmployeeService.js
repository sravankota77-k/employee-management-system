import api from "./api";

const EMPLOYEE_API = "/employees";

export const getAllEmployees = () => {
    return api.get(EMPLOYEE_API);
};

export const deleteEmployee = (id) => {
    return api.delete(`${EMPLOYEE_API}/${id}`);
};

export const getEmployeeById = (id) => {
    return api.get(`${EMPLOYEE_API}/${id}`);
};

export const addEmployee = (employee) => {
    return api.post(EMPLOYEE_API, employee);
};

export const updateEmployee = (id, employee) => {
    return api.put(`${EMPLOYEE_API}/${id}`, employee);
};

export const searchEmployee = (firstName) => {
    return api.get(
        `${EMPLOYEE_API}/search?firstName=${firstName}`
    );
};

export const getEmployeesPage = (page, size) => {
    return api.get(
        `${EMPLOYEE_API}/page?page=${page}&size=${size}`
    );
};

export const sortEmployees = (field) => {
    return api.get(
        `/employees/sort?field=${field}`
    );
};

export const assignDepartment = (
    employeeId,
    departmentId
) => {
    return api.put(
        `${EMPLOYEE_API}/${employeeId}/department/${departmentId}`
    );
};