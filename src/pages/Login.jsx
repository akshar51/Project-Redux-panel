import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedList = JSON.parse(localStorage.getItem("employeeList")) || [];

    const user = storedList.find(
      (emp) =>
        emp.name.trim().toLowerCase() === name.trim().toLowerCase() &&
        emp.role.toLowerCase() === role.toLowerCase()
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      if (user.role === "manager") {
        navigate("/dashboard");
      } else {
        navigate("/employee");
      }
    } else {
      setError("Invalid credentials. Please check name and role.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control my-3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />

          <select
            className="form-control mb-3"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setError("");
            }}
          >
            <option value="">Select Role</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>

          {error && <div className="text-danger">{error}</div>}

          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
