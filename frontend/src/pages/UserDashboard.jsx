import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
    getAdminCount,
    getUserCount
} from "../services/UserService";

function UserDashboard() {

    const [adminCount, setAdminCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const adminResponse =
                await getAdminCount();

            setAdminCount(
                adminResponse.data
            );

            const userResponse =
                await getUserCount();

            setUserCount(
                userResponse.data
            );

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <DashboardLayout>

            <h1 className="page-title">
                User Dashboard
            </h1>

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>Total Admins</h3>
                    <h2>{adminCount}</h2>
                </div>

                <div className="stat-card">
                    <h3>Total Users</h3>
                    <h2>{userCount}</h2>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default UserDashboard;