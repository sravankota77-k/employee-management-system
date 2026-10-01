import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeTable from "../components/EmployeeTable";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

import {
    getEmployeesPage,
    deleteEmployee,
    searchEmployee,
    sortEmployees
} from "../services/EmployeeService";

function EmployeePage() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees(page);
    }, [page]);

    const loadEmployees = async (pageNumber = 0) => {

        try {

            const response =
                await getEmployeesPage(pageNumber, 5);

            setEmployees(response.data.content);
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
            loadEmployees(page);
            return;
        }

        try {

            const response =
                await searchEmployee(searchText);

            setEmployees(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const handleSort = async (field) => {

        if (field === "") {
            loadEmployees(page);
            return;
        }

        try {

            const response =
                await sortEmployees(field);

            setEmployees(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete employee?")) {
            return;
        }

        try {

            await deleteEmployee(id);

            setEmployees(
                employees.filter(
                    (emp) => emp.id !== id
                )
            );

        } catch (error) {

            console.error(error);
            alert("Delete Failed");
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <h2>Loading Employees...</h2>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="page-header">

                <h1>Employees</h1>

                {localStorage.getItem("role") === "ADMIN" && (
                    <button
                        className="add-btn"
                        onClick={() =>
                            navigate("/employees/add")
                        }
                    >
                        <FaUserPlus />
                        <span>Add Employee</span>
                    </button>
                )}

            </div>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Employee..."
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
                    <option value="firstName">First Name</option>
                    <option value="salary">Salary</option>
                    <option value="email">Email</option>
                </select>

            </div>

            <div className="table-card">

                <EmployeeTable
                    employees={employees}
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

export default EmployeePage;