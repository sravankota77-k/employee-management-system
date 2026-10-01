import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import {
    getDepartmentById,
    updateDepartment
} from "../services/DepartmentService";

function EditDepartmentPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [department, setDepartment] = useState({
        name: ""
    });

    useEffect(() => {
        loadDepartment();
    }, []);

    const loadDepartment = async () => {

        try {

            const response =
                await getDepartmentById(id);

            setDepartment({
                name: response.data.name
            });

        } catch (error) {
            console.error(error);
            alert("Failed to Load Department");
        }
    };

    const handleChange = (e) => {

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateDepartment(
                id,
                department
            );

            alert(
                "Department Updated Successfully"
            );

            navigate("/departments");

        } catch (error) {

            console.error(error);
            alert("Update Failed");
        }
    };

    return (
        <DashboardLayout>

            <div className="form-container">

                <h1>Edit Department</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>
                            Department Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={department.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Update Department
                    </button>

                </form>

            </div>

        </DashboardLayout>
    );
}

export default EditDepartmentPage;