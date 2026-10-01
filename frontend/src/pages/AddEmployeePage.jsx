import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/EmployeeService";

function AddEmployeePage() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        salary: ""
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addEmployee(employee);

            alert("Employee Added Successfully");

            navigate("/employees");

        } catch (error) {

            console.log(
                "Status:",
                error.response?.status
            );

            console.log(
                "Response:",
                error.response?.data
            );

            console.error(error);

            alert("Failed To Add Employee");
        }
    };

    return (
        <div className="form-container">

            <h1>Add Employee</h1>

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
                    Save Employee
                </button>

            </form>

        </div>
    );
}

export default AddEmployeePage;