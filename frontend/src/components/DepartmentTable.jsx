import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DepartmentTable({
                             departments = [],
                             onDelete,
                             isAdmin = true
                         }) {

    const navigate = useNavigate();

    return (
        <div className="table-container">

            <table className="employee-table">

                <thead>
                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    {isAdmin && (
                        <th>Actions</th>
                    )}

                </tr>
                </thead>

                <tbody>

                {departments.length > 0 ? (

                    departments.map((dept) => (

                        <tr key={dept.id}>

                            <td>{dept.id}</td>

                            <td>{dept.name}</td>

                            {isAdmin && (

                                <td>

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            navigate(
                                                `/departments/edit/${dept.id}`
                                            )
                                        }
                                    >
                                        <FaEdit />
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            onDelete(dept.id)
                                        }
                                    >
                                        <FaTrash />
                                        Delete
                                    </button>

                                </td>

                            )}

                        </tr>

                    ))

                ) : (

                    <tr>

                        <td
                            colSpan={isAdmin ? 3 : 2}
                            style={{
                                textAlign: "center",
                                padding: "20px"
                            }}
                        >
                            No Departments Found
                        </td>

                    </tr>

                )}

                </tbody>

            </table>

        </div>
    );
}

export default DepartmentTable;