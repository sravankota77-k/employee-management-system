import {FaUserCircle} from "react-icons/fa";

function Navbar() {

    const role = localStorage.getItem("role");

    return (
        <div className="navbar">

            <h2>Employee Management System</h2>


            <div className="user-role">
                <FaUserCircle />
                <span>{role}</span>
            </div>

        </div>
    );
}

export default Navbar;