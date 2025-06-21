import React from 'react'
import Dashboard from './pages/Dashboard'
import EmployeeForm from './pages/EmployeeForm'
import { Route, Routes } from 'react-router'
import Task from './pages/Task'
import EmployeePage from './pages/EmployeePage'
import Salary from './pages/Salary'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/form' element={<EmployeeForm/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/' element={<EmployeePage/>}/>
        <Route path='/salary' element={<Salary/>}/>
      </Routes>
    </>
  )
}

export default App
