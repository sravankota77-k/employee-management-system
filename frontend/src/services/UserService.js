import api from "./api";

const USER_API = "/api/users";

export const getAdminCount = () => {
    return api.get(
        `${USER_API}/admin-count`
    );
};

export const getUserCount = () => {
    return api.get(
        `${USER_API}/user-count`
    );
};

export const getAllUsers = () => {
    return api.get(
        `${USER_API}/all`
    );
};

export const searchUser = (username) => {
    return api.get(
        `${USER_API}/search?username=${username}`
    );
};