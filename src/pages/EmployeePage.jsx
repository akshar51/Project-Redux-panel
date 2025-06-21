import React from "react";
import { Link } from "react-router";

const EmployeePage = () => {
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
          <div className="container-fluid main-content px-3">
            <div className="my-info-header">
              <h2 className="text-black">My Info : </h2>
              <button className="btn">
                <i className="fas fa-ellipsis-v" />
              </button>
            </div>
            <div className="row d-flex align-items-stretch">
              <div className="col-lg-6 h-100">
                <div className="card mb-4 h-100">
                  <div className="card-body">
                    <div className="row align-items-center mb-4 flex-column p-3">
                      <div className="col-md-auto text-center">
                        <img
                          src="https://placehold.co/120x120/0d6efd/ffffff?text=O"
                          alt="Oliver Thompson"
                          className="profile-picture"
                        />
                      </div>
                      <div className="col-md text-center my-4">
                        <h4 className="mb-2">Oliver Thompson</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 h-100">
                <div className="card mb-4 h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="card-title mb-0">--- Details --</h5>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="department"
                        className="form-label text-black"
                      >
                        Department :{" "}
                      </label>
                      <p>HR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-md-12">
                <h2 className="text-black">Tasks : </h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export default EmployeePage;
