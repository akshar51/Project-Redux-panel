import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="" className="text-nowrap logo-img">
          <img src="../assets/images/logos/logo-white.svg" width={180}/>
        </a>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu text-white">Home</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link text-decoration-none" to="/">
              <span>
                <i className="ti ti-layout-dashboard text-white" />
              </span>
              <span className="hide-menu text-white">Dashboard</span>
            </Link>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu text-white">EMPLOYEE</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link text-decoration-none" to="/form">
              <span>
                <i className="ti ti-article text-white" />
              </span>
              <span className="hide-menu text-white">Add Employee</span>
            </Link>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu text-white">AUTH</span>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link text-decoration-none" href="#">
              <span>
                <i className="ti ti-login text-white" />
              </span>
              <span className="hide-menu text-white">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
    </>
  )
}

export default Sidebar
