import React from 'react'
import Dashboard from './pages/Dashboard'
import EmployeeForm from './pages/EmployeeForm'
import { Route, Routes } from 'react-router'
import Task from './pages/Task'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/form' element={<EmployeeForm/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
    </>
  )
}

export default App
