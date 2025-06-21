import React from 'react'
import { Link } from 'react-router'

const Salary = () => {
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
              to="/"
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
              <h4 className="text-black ms-auto py-2">Hello, Akshar</h4>
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
                    <h6>Salary : </h6>
                    <h6>Bonus : </h6>
                    <h6>House Rent Allowance (HRA) : </h6>
                    <h6>Traveling Allowance (TA) : </h6>
                    <h6>Dearness Allowance (DA) : </h6>
                </div>
                <p className='mt-4'>------------ Deductions ---------------</p>
                <div className="salary-deduct">
                    <h6>Provident Fund (PF) : </h6>
                    <h6>Professional Tax (PT) : </h6>
                    <h6>Tax : </h6>
                </div>
                <div className="net-salary border-top mt-3 py-2">
                    <h6>Net salary : 80000</h6>
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
