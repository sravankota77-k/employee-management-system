import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const role =
        localStorage.getItem("role");

    const dashboardPath =
        role === "ADMIN"
            ? "/admin"
            : "/user";

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");
    };

    return (

        <div className="sidebar">

            <ul className="sidebar-menu">

                <li>
                    <Link to={dashboardPath}>
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/employees">
                        Employees
                    </Link>
                </li>

                <li>
                    <Link to="/departments">
                        Departments
                    </Link>
                </li>

                <li>
                    <Link to="/users">
                        Users
                    </Link>
                </li>

                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                        }}
                    >
                        Logout
                    </a>
                </li>

            </ul>

        </div>

    );
}

export default Sidebar;