import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

import EmployeePage from "./pages/EmployeePage";
import AddEmployeePage from "./pages/AddEmployeePage";
import EditEmployeePage from "./pages/EditEmployeePage";

import DepartmentPage from "./pages/DepartmentPage";
import AddDepartmentPage from "./pages/AddDepartmentPage";
import EditDepartmentPage from "./pages/EditDepartmentPage";

import UserPage from "./pages/UserPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/user"
                    element={
                        <ProtectedRoute>
                            <UserDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/employees"
                    element={
                        <ProtectedRoute>
                            <EmployeePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/employees/add"
                    element={
                        <ProtectedRoute>
                            <AddEmployeePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/employees/edit/:id"
                    element={
                        <ProtectedRoute>
                            <EditEmployeePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/departments"
                    element={
                        <ProtectedRoute>
                            <DepartmentPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/departments/add"
                    element={
                        <ProtectedRoute>
                            <AddDepartmentPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/departments/edit/:id"
                    element={
                        <ProtectedRoute>
                            <EditDepartmentPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <UserPage />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;