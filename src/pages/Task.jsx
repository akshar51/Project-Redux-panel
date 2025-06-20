import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Task = () => {
  const list = useSelector((state) => state.employeeData.list);

  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <Sidebar />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <Navbar />
          {/*  Header End */}
          <div className="container-fluid">
            <div className="row gap-2">
              {list.map((item) => (
                <div className="card d-flex flex-row align-items-center p-3 mb-3 bg-transparent border border-1">
                  {/* Image */}
                  <div className="me-3 px-4">
                    <img
                      src=""
                      alt="employee"
                      className="rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Employee Info */}
                  <div className="flex-grow-1 text-white">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-0">Department : {item.department}</p>
                  </div>

                  {/* Assign Task Button */}
                  <div>
                    <button className="btn btn-primary">Assign Task</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer start  */}
            {/* <Footer/> */}
            {/* Footer end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
