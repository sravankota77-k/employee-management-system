import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:8080/auth/register",
                {
                    username: user.username,
                    password: user.password,
                    role: "USER"
                }
            );

            alert("Registration Successful");

            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="form-container">

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Username</label>

                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="save-btn"
                >
                    Register
                </button>

            </form>

        </div>
    );
}

export default RegisterPage;