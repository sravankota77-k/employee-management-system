import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import {
    getAdminCount,
    getUserCount
} from "../services/UserService";

import { getAllEmployees } from "../services/EmployeeService";
import { getDepartmentsPage } from "../services/DepartmentService";

function AdminDashboard() {

    const [employeeCount, setEmployeeCount] = useState(0);
    const [departmentCount, setDepartmentCount] = useState(0);
    const [adminCount, setAdminCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {

        try {
            const adminResponse =
                await getAdminCount();setAdminCount(adminResponse.data);

            const userResponse =
                await getUserCount();

            setUserCount(userResponse.data);
            const employeeResponse =
                await getAllEmployees();

            setEmployeeCount(
                employeeResponse.data.length
            );

            const departmentResponse =
                await getDepartmentsPage(0, 100);

            setDepartmentCount(
                departmentResponse.data.totalElements
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DashboardLayout>

            <h1 className="page-title">
                Dashboard
            </h1>

            <div className="stats-grid">

                <StatCard
                    title="Employees"
                    value={employeeCount}
                />

                <StatCard
                    title="Departments"
                    value={departmentCount}
                />

                <StatCard
                    title="Admins"
                    value={adminCount}
                />

                <StatCard
                    title="Users"
                    value={userCount}
                />

            </div>

            <div className="welcome-box">

                <h2>
                    Welcome Admin
                </h2>

                <p>
                    Manage employees and departments from one place.
                </p>

            </div>

        </DashboardLayout>
    );
}

export default AdminDashboard;