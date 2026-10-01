import api from "./api";

const DEPARTMENT_API = "/department";

export const getDepartmentsPage = (page, size) => {
    return api.get(
        `${DEPARTMENT_API}/page?page=${page}&size=${size}`
    );
};

export const addDepartment = (department) => {
    return api.post(
        DEPARTMENT_API,
        department
    );
};

export const updateDepartment = (id, department) => {
    return api.put(
        `${DEPARTMENT_API}/${id}`,
        department
    );
};

export const deleteDepartment = (id) => {
    return api.delete(
        `${DEPARTMENT_API}/${id}`
    );
};

export const searchDepartment = (name) => {
    return api.get(
        `${DEPARTMENT_API}/search?name=${name}`
    );
};

export const sortDepartments = (field) => {
    return api.get(
        `${DEPARTMENT_API}/sort?field=${field}`
    );
};

export const getDepartmentById = (id) => {
    return api.get(
        `${DEPARTMENT_API}/${id}`
    );
};