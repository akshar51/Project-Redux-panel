import React from 'react'
import Dashboard from './pages/Dashboard'
import EmployeeForm from './pages/EmployeeForm'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/form' element={<EmployeeForm/>}/>
      </Routes>
    </>
  )
}

export default App
