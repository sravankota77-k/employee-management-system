import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DepartmentTable from "../components/DepartmentTable";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

import {
    getDepartmentsPage,
    deleteDepartment,
    searchDepartment,
    sortDepartments
} from "../services/DepartmentService";

function DepartmentPage() {

    const [departments, setDepartments] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        loadDepartments(page);
    }, [page]);

    const loadDepartments = async (pageNumber = 0) => {

        try {

            const response =
                await getDepartmentsPage(pageNumber, 5);

            setDepartments(response.data.content);
            setPage(response.data.number);
            setTotalPages(response.data.totalPages);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {

        if (searchText.trim() === "") {
            loadDepartments(page);
            return;
        }

        try {

            const response =
                await searchDepartment(searchText);

            setDepartments(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const handleSort = async (field) => {

        if (field === "") {
            loadDepartments(page);
            return;
        }

        try {

            const response =
                await sortDepartments(field);

            setDepartments(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete Department?")) {
            return;
        }

        try {

            await deleteDepartment(id);

            setDepartments(
                departments.filter(
                    (dept) => dept.id !== id
                )
            );

        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <h2>Loading...</h2>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="page-header">

                <h1>Departments</h1>

                {localStorage.getItem("role") === "ADMIN" && (
                    <button
                        className="add-btn"
                        onClick={() =>
                            navigate("/departments/add")
                        }
                    >
                        <FaUserPlus />
                        <span>Add Department</span>
                    </button>
                )}

            </div>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Department..."
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

                <select
                    onChange={(e) =>
                        handleSort(e.target.value)
                    }
                >
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                </select>

            </div>

            <div className="table-card">

                <DepartmentTable
                    departments={departments}
                    onDelete={handleDelete}
                    isAdmin={
                        localStorage.getItem("role") === "ADMIN"
                    }
                />

                <div className="pagination">

                    <button
                        disabled={page === 0}
                        onClick={() =>
                            setPage(page - 1)
                        }
                    >
                        Previous
                    </button>

                    <span>
                        Page {page + 1} of {totalPages}
                    </span>

                    <button
                        disabled={
                            page === totalPages - 1
                        }
                        onClick={() =>
                            setPage(page + 1)
                        }
                    >
                        Next
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default DepartmentPage;