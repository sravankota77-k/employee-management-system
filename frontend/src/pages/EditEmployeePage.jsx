import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import {
    getEmployeeById,
    updateEmployee
} from "../services/EmployeeService";

function EditEmployeePage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        salary: ""
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        try {
            const response = await getEmployeeById(id);

            setEmployee({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                salary: response.data.salary
            });

        } catch (error) {
            console.error(error);
            alert("Failed to load employee");
        }
    };


    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateEmployee(id, employee);

            alert("Employee Updated Successfully");

            navigate("/employees");

        } catch (error) {
            console.error(error);
            alert("Update Failed");
        }
    };

    return (
        <DashboardLayout>

            <div className="form-container">

                <h1>Edit Employee</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>

                        <input
                            type="text"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>

                        <input
                            type="text"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Salary</label>

                        <input
                            type="number"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Update Employee
                    </button>

                </form>

            </div>

        </DashboardLayout>
    );
}

export default EditEmployeePage;