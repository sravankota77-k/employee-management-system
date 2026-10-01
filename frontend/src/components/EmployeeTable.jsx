// function EmployeeTable({ employees, onDelete }) {
//     return (
//         <div className="table-container">
//             <table className="employee-table">
//                 <thead>
//                 <tr>
//                     <th style={{ width: "8%" }}>ID</th>
//                     <th style={{ width: "15%" }}>First Name</th>
//                     <th style={{ width: "15%" }}>Last Name</th>
//                     <th style={{ width: "32%" }}>Email</th>
//                     <th style={{ width: "15%" }}>Salary</th>
//                     <th style={{ width: "15%" }}>Actions</th>
//                 </tr>
//                 </thead>
//
//                 <tbody>
//                 {employees.map((emp) => (
//                     <tr key={emp.id}>
//                         <td>{emp.id}</td>
//                         <td>{emp.firstName}</td>
//                         <td>{emp.lastName}</td>
//                         <td>{emp.email}</td>
//                         <td>₹{emp.salary}</td>
//
//                         <td>
//                             <button
//                                 className="edit-btn"
//                                 onClick={() =>
//                                     window.location.href = `/employees/edit/${emp.id}`
//                                 }
//                             >
//                                 Edit
//                             </button>
//
//                             <button
//                                 className="delete-btn"
//                                 onClick={() => onDelete(emp.id)}
//                             >
//                                 Delete
//                             </button>
//                         </td>
//
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
//
// export default EmployeeTable;
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EmployeeTable({
                           employees = [],
                           onDelete,
                           isAdmin
                       }) {

    const navigate = useNavigate();

    return (
        <table className="employee-table">

            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>

                {isAdmin && (
                    <th>Actions</th>
                )}
            </tr>
            </thead>

            <tbody>

            {employees.length > 0 ? (

                employees.map((employee) => (

                    <tr key={employee.id}>

                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>₹{employee.salary}</td>

                        {isAdmin && (
                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        navigate(
                                            `/employees/edit/${employee.id}`
                                        )
                                    }
                                >
                                    <FaEdit />
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        onDelete(employee.id)
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
                        colSpan={isAdmin ? 6 : 5}
                        style={{
                            textAlign: "center",
                            padding: "20px"
                        }}
                    >
                        No Employees Found
                    </td>
                </tr>

            )}

            </tbody>

        </table>
    );
}

export default EmployeeTable;