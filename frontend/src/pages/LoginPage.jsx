import Login from "../components/Login";
import "../styles/login.css";

function LoginPage() {

    return (

        <div className="app">
            <div className="login-wrapper">

                <div className="left-panel">
                    <div className="brand">
                        <h1>
                            Employee <br />
                            Management System
                        </h1>
                    </div>
                </div>

                <div className="right-panel">
                    <Login />
                </div>

            </div>
        </div>
    );
}

export default LoginPage;