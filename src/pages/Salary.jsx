import React from 'react'
import { Link } from 'react-router-dom'

const Salary = () => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
  const employee = employeeList.find(emp => emp.id === user?.id);

  const gross = Number(employee?.salary || 0)
  + Number(employee?.bonus || 0)
  + Number(employee?.hra || 0)
  + Number(employee?.ta || 0)
  + Number(employee?.da || 0);

const deductions = Number(employee?.pf || 0)
  + Number(employee?.pt || 0)
  + Number(employee?.tax || 0);

const net = gross - deductions;

  return (
    <>
       <div id="wrapper">
        {/* Sidebar */}
        <div id="sidebar-wrapper">
          <div className="sidebar-heading px-4 py-3 d-flex align-items-center">
            <img
              src="https://placehold.co/40x40/0d6efd/ffffff?text=S"
              alt="STAFFPRO Logo"
              className="rounded-circle me-2"
            />
            <h4 className="mb-0 text-primary">STAFFPRO</h4>
          </div>
          <div className="list-group list-group-flush">
            <Link
              to="/employee"
              className="list-group-item list-group-item-action py-3 ripple active"
            >
              <i className="ti ti-user-circle" /> My Profile
            </Link>
            <Link
              to="/salary"
              className="list-group-item list-group-item-action py-3 ripple fw-bold text-primary"
            >
              <i className="ti ti-coin-rupee text-primary" /> Salary
            </Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light nav-black">
            <div className="container-fluid">
              <button
                className="btn btn-outline-secondary d-inline-block d-lg-none me-auto"
                id="sidebarToggle"
              >
                <i className="fas fa-bars" />
              </button>
              <h4 className="text-black ms-auto py-2">Hello, {employee.name}</h4>
            </div>
          </nav>
          <div className="container-fluid main-content px-4">
            <div className="my-info-header">
              <h3 className='fw-bold'>Salary Details : </h3>
              <button className="btn">
                <i className="fas fa-ellipsis-v" />
              </button>
            </div>
            <div className="row flex-column text-black">
              <div className="col-md-12 border border-2 rounded p-3 ">
                <h4 className='fw-medium'>Salary & Benefits : </h4>
                <div className="salary-content mt-3">
                    <h6>Salary : {employee.salary}</h6>
                    <h6>Bonus : {employee.bonus}</h6>
                    <h6>House Rent Allowance (HRA) : {employee.hra}</h6>
                    <h6>Traveling Allowance (TA) : {employee.ta}</h6>
                    <h6>Dearness Allowance (DA) : {employee.da}</h6>
                </div>
                <p className='mt-4'>------------ Deductions ---------------</p>
                <div className="salary-deduct">
                    <h6 className='text-danger'>Provident Fund (PF) : {employee.pf}</h6>
                    <h6 className='text-danger'>Professional Tax (PT) : {employee.pt}</h6>
                    <h6 className='text-danger'>Tax : {employee.tax}</h6>
                </div>
                <div className="net-salary border-top mt-3 py-2">
                    <h6 className='text-success'>Net salary : {net}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  )
}

export default Salary
