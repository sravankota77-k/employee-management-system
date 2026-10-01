import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import UserTable from "../components/UserTable";

import {
    getAllUsers,
    searchUser
} from "../services/UserService";

function UserPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        try {

            const response =
                await getAllUsers();

            setUsers(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);
        }
    };
    const handleSearch = async () => {

        console.log("Button Clicked");

        if (searchText.trim() === "") {
            loadUsers();
            return;
        }

        try {

            console.log("Searching:", searchText);

            const response =
                await searchUser(searchText);

            console.log("Response:", response);
            console.log("Data:", response.data);

            setUsers(response.data);

        } catch (error) {

            console.error("Search Error:", error);

            console.log(
                "Backend Response:",
                error.response?.data
            );

            alert("Search Failed");
        }
    };

    if (loading) {

        return (
            <DashboardLayout>
                <h2>Loading Users...</h2>
            </DashboardLayout>
        );
    }

    return (

        <DashboardLayout>

            <div className="page-header">
                <h1>Users</h1>
            </div>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Username..."
                    value={searchText}
                    onChange={(e) =>
                        setSearchText(e.target.value)
                    }
                />

                <button
                    className="search-btn"
                    onClick={handleSearch}
                >
                    Search
                </button>

            </div>

            <div className="table-card">

                <UserTable
                    users={users}
                />

            </div>

        </DashboardLayout>
    );
}

export default UserPage;