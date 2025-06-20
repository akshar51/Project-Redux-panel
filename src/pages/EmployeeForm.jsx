import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { useDispatch, useSelector } from "react-redux";
import { addEmp, editData,setError } from "../redux/employeeSlice";
import { useNavigate } from "react-router";


const EmployeeForm = () => {

  
  const [obj, setObj] = useState({});
  const dispatch = useDispatch()
  const navi = useNavigate();
  let {editData,error} = useSelector(state => state.employeeData)
 

  useEffect(() => {
    setObj({...editData})
  }, [editData]);

  const handleChange = (e)=>{
    const {name,value,files} = e.target;

    if(name === "image"){
      let image = files[0];
      let reader = new FileReader();

      reader.onload = ()=>{
        let fileData = {
          name : image.name,
          type : image.type,
          url : reader.result,
        }
        let data = {...obj,image : fileData}
        setObj(data);
      }
      reader.readAsDataURL(image)
    }
    else{
      let data = {...obj,[name]:value}
      setObj(data);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!validation()) return;

    dispatch(addEmp({...obj,id : Date.now()}))
    dispatch(setError({}))
    setObj({});
    navi("/")
  }

  

  const validation = ()=>{
    let error = {};
    if(!obj.name) error.name = "Name is required"
    if(!obj.department) error.department = "Department is required"
    if(!obj.salary) error.salary = "Salary is required"
    if(!obj.bonus) error.bonus = "Bonus is required"
    if(!obj.hra) error.hra = "HRA is required"
    if(!obj.da) error.da = "DA is required"
    if(!obj.ta) error.ta = "TA is required"
    if(!obj.pf) error.pf = "PF is required"
    if(!obj.pt) error.pt = "PT is required"
    if(!obj.tax) error.tax = "Tax is required"
    if(!obj.image) error.image = "Image is required"
    // if(!obj.task) error.task = "Task is required"
    dispatch(setError(error))
    return Object.keys(error).length === 0;
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
                    {
                      error.name && <span className="text-danger fw-bold">{error.name}</span>
                    }
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
                    {
                      error.department && <span className="text-danger fw-bold">{error.department}</span>
                    }
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
                    {
                      error.salary && <span className="text-danger fw-bold">{error.salary}</span>
                    }
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
                    {
                      error.bonus && <span className="text-danger fw-bold">{error.bonus}</span>
                    }
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
                    {
                      error.hra && <span className="text-danger fw-bold">{error.hra}</span>
                    }
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
                    {
                      error.da && <span className="text-danger fw-bold">{error.da}</span>
                    }
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
                    {
                      error.ta && <span className="text-danger fw-bold">{error.ta}</span>
                    }
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
                    {
                      error.pf && <span className="text-danger fw-bold">{error.pf}</span>
                    }
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
                    {
                      error.pt && <span className="text-danger fw-bold">{error.pt}</span>
                    }
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
                    {
                      error.tax && <span className="text-danger fw-bold">{error.tax}</span>
                    }
                  </div>
                    
                  {/* Task */}
                  {/* <div className="mb-3">
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
                    {
                      error.task && <span className="text-danger fw-bold">{error.task}</span>
                    }
                  </div> */}

                  {/* Image */}
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label text-white">
                      Profile Image : 
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={handleChange}
                    />
                    {
                      error.image && <span className="text-danger fw-bold">{error.image}</span>
                    }
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
