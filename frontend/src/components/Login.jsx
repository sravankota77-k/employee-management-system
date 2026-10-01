import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isRegister, setIsRegister] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        try {

            const url = isRegister
                ? "http://localhost:8080/auth/register"
                : "http://localhost:8080/auth/login";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {

                if (isRegister) {

                    setSuccess(
                        "Registration Successful. Please Login."
                    );

                    setUsername("");
                    setPassword("");

                    setIsRegister(false);

                } else {

                    setSuccess("Login Successful");

                    localStorage.setItem(
                        "token",
                        data.token
                    );

                    localStorage.setItem(
                        "role",
                        data.role
                    );

                    setTimeout(() => {

                        if (data.role === "ADMIN") {
                            navigate("/admin");
                        } else {
                            navigate("/user");
                        }

                    }, 1000);
                }

            } else {

                setError(
                    data.message ||
                    "Operation Failed"
                );
            }

        } catch (err) {

            setError(
                "Unable to connect to server"
            );

            console.error(err);
        }
    };

    return (
        <div className="login-card">

            <h2>
                {isRegister
                    ? "Create Account"
                    : "Welcome Back"}
            </h2>

            <p>
                {isRegister
                    ? "Register to continue"
                    : "Sign in to continue"}
            </p>

            <form onSubmit={handleSubmit}>

                <div className="input-group">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) =>
                            setUsername(
                                e.target.value
                            )
                        }
                        required
                    />

                </div>

                <div className="input-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                        required
                    />

                </div>

                <button
                    className="login-btn"
                    type="submit"
                >
                    {isRegister
                        ? "Register"
                        : "Login"}
                </button>

                {success && (
                    <p className="success-message">
                        {success}
                    </p>
                )}

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

            </form>

            <div
                style={{
                    marginTop: "15px",
                    textAlign: "center",
                }}
            >
                {isRegister ? (
                    <p>
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() =>
                                setIsRegister(false)
                            }
                            style={{
                                border: "none",
                                background: "none",
                                color: "#2563eb",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Login
                        </button>
                    </p>
                ) : (
                    <p>
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() =>
                                setIsRegister(true)
                            }
                            style={{
                                border: "none",
                                background: "none",
                                color: "#2563eb",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Register
                        </button>
                    </p>
                )}
            </div>

        </div>
    );
}