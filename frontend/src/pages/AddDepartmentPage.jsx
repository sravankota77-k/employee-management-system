import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDepartment } from "../services/DepartmentService";

function AddDepartmentPage() {

    const navigate = useNavigate();

    const [department, setDepartment] = useState({
        name: ""
    });

    const handleChange = (e) => {
        setDepartment({
            ...department,
            name: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await addDepartment(department);

            alert("Department Added Successfully");

            navigate("/departments");

        } catch (error) {

            console.error(error);

            alert("Failed To Add Department");
        }
    };

    return (
        <div className="form-container">

            <h1>Add Department</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>
                        Department Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Department Name"
                        value={department.name}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="save-btn"
                >
                    Save Department
                </button>

            </form>

        </div>
    );
}

export default AddDepartmentPage;