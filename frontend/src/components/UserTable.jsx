function UserTable({ users }) {

    return (

        <div className="table-container">

            <table className="employee-table">

                <thead>

                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Role</th>
                </tr>

                </thead>

                <tbody>

                {users.length > 0 ? (

                    users.map((user) => (

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.username}</td>

                            <td>

                                <span
                                    className={
                                        user.role === "ADMIN"
                                            ? "role-admin"
                                            : "role-user"
                                    }
                                >
                                    {user.role}
                                </span>

                            </td>

                        </tr>

                    ))

                ) : (

                    <tr>

                        <td
                            colSpan="3"
                            style={{
                                textAlign: "center",
                                padding: "20px"
                            }}
                        >
                            No Users Found
                        </td>

                    </tr>

                )}

                </tbody>

            </table>

        </div>

    );
}

export default UserTable;