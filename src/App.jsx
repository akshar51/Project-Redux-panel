import React, { useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import EmployeeForm from './pages/EmployeeForm'
import { Route, Routes } from 'react-router'
import Task from './pages/Task'
import EmployeePage from './pages/EmployeePage'
import Salary from './pages/Salary'
import { useSelector } from 'react-redux'
import Login from './pages/Login'

const App = () => {

  const employeeList = useSelector((state) => state.employeeData.list);

   useEffect(() => {
    // Load from localStorage
    const storedList = JSON.parse(localStorage.getItem("employeeList")) || [];

    // If empty, add default manager and employee
    if (storedList.length === 0) {
      const defaultUsers = [
        { name: "John", role: "manager", email: "john@example.com", salary: 80000 },
        { name: "Mark", role: "employee", email: "mark@example.com", salary: 40000 }
      ];
      localStorage.setItem("employeeList", JSON.stringify(defaultUsers));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
  }, [employeeList]);


  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/form' element={<EmployeeForm/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/employee' element={<EmployeePage/>}/>
        <Route path='/salary' element={<Salary/>}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
