import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmployees } from "../redux/employeeSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      setError("Invalid credentials. For manager login enter 'John' and for employee enter 'Mark'. ");
    }
  };

  
useEffect(() => {
  const storedList = JSON.parse(localStorage.getItem("employeeList"));

  if (!storedList || storedList.length === 0) {
    const defaultUsers = [
      { name: "John", role: "manager", email: "john@example.com", salary: 80000 },
      { name: "Mark", role: "employee", email: "mark@example.com", salary: 40000 }
    ];
    localStorage.setItem("employeeList", JSON.stringify(defaultUsers));
    dispatch(setEmployees(defaultUsers));
  } else {
    dispatch(setEmployees(storedList));
  }
}, []);

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
