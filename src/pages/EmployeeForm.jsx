import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { useDispatch, useSelector } from "react-redux";
import { addEmp, editData } from "../redux/employeeSlice";
import { useNavigate } from "react-router";


const EmployeeForm = () => {

  
  const [obj, setObj] = useState({});
  const dispatch = useDispatch()
  const navi = useNavigate();
  let {editData} = useSelector(state => state.employeeData)

  useEffect(() => {
    setObj({...editData})
  }, [editData]);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    let data = {...obj,[name]:value}
    setObj(data);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addEmp({...obj,id : Date.now()}))
    setObj({});
    navi("/")
  }

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

          {/* Form Start */}
          <div className="container-fluid">
            <div className="row">
              <h1 className="">Employee Detail Form : </h1>
              <div className="col-md-6">
                <form className="my-5" method="post" onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Name : 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      value={obj.name || ""}
                    />
                  </div>

                  {/* Department */}
                  <div className="mb-3">
                    <label htmlFor="department" className="form-label text-white">
                      Department : 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      name="department"
                      onChange={handleChange}
                      value={obj.department || ""}
                    />
                  </div>

                  {/* Salary */}
                  <div className="mb-3">
                    <label htmlFor="salary" className="form-label text-white">
                      Salary : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="salary"
                      name="salary"
                      onChange={handleChange}
                      value={obj.salary || ""}
                    />
                  </div>

                  {/* Bonus */}
                  <div className="mb-3">
                    <label htmlFor="bonus" className="form-label text-white">
                      Bonus : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="bonus"
                      name="bonus"
                      onChange={handleChange}
                      value={obj.bonus || ""}
                    />
                  </div>

                  {/* HRA */}
                  <div className="mb-3">
                    <label htmlFor="hra" className="form-label text-white">
                      HRA : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="hra"
                      name="hra"
                      onChange={handleChange}
                      value={obj.hra || ""}
                    />
                  </div>

                  {/* DA */}
                  <div className="mb-3">
                    <label htmlFor="da" className="form-label text-white">
                      DA : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="da"
                      name="da"
                      onChange={handleChange}
                      value={obj.da || ""}
                    />
                  </div>

                  {/* TA */}
                  <div className="mb-3">
                    <label htmlFor="ta" className="form-label text-white">
                      TA : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="ta"
                      name="ta"
                      onChange={handleChange}
                      value={obj.ta || ""}
                    />
                  </div>

                  {/* PF */}
                  <div className="mb-3">
                    <label htmlFor="pf" className="form-label text-white">
                      PF : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="pf"
                      name="pf"
                      onChange={handleChange}
                      value={obj.pf || ""}
                    />
                  </div>

                  {/* PT */}
                  <div className="mb-3">
                    <label htmlFor="pt" className="form-label text-white">
                      PT : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="pt"
                      name="pt"
                      onChange={handleChange}
                      value={obj.pt || ""}
                    />
                  </div>

                  {/* Tax */}
                  <div className="mb-3">
                    <label htmlFor="tax" className="form-label text-white">
                      Tax : 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tax"
                      name="tax"
                      onChange={handleChange}
                      value={obj.tax || ""}
                    />
                  </div>

                  {/* Task */}
                  <div className="mb-3">
                    <label htmlFor="task" className="form-label text-white">
                      Task : 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      name="task"
                      onChange={handleChange}
                      value={obj.task || ""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            
            
            {/* Footer start  */}
            <Footer/>
            {/* Footer end  */}
          </div>
          {/* Form End */}
        </div>
      </div>

      
    </>
  );
};

export default EmployeeForm;
