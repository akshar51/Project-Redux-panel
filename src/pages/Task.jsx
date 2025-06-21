import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/employeeSlice";


const Task = () => {

  const list = useSelector((state) => state.employeeData.list);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "pending"
  });
  

  const openModal = (emp) => {
    setSelectedEmp(emp);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTaskData({
      title: "",
      description: "",
      deadline: "",
      status: "pending"
    });
  };


  const handleChange = (e) => {
    const {name,value} = e.target;
    let data = {...taskData,[name]:value};
    setTaskData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({empId : selectedEmp.id , task : taskData}))
    closeModal();
  };

  console.log(list)


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
            <div className="row gap-2 mt-4">
              {list.map((item) => (
                <div key={item.id} className="card d-flex flex-row align-items-center p-3 mb-3 bg-transparent border border-1">
                  {/* Image */}
                  <div className="me-3 px-4">
                    <img
                      src={item.image.url}
                      alt={item.image.name}
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
                    <button className="btn btn-primary" onClick={() => openModal(item)}>Assign Task</button>
                  </div>
                </div>
              ))}

               {showModal && (
              <div className="modal show d-block" tabIndex="-1" style={{ background: "#00000099" }}>
                <div className="modal-dialog">
                  <form className="modal-content" onSubmit={handleSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title text-black">Assign Task to "{selectedEmp?.name}"</h5>
                      <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                      <label htmlFor="title" className="form-label fw-bold">
                      Title : 
                    </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Title"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                      />

                      <label htmlFor="description" className="form-label fw-bold">
                      Description : 
                    </label>
                      <textarea
                        className="form-control mb-3"
                        placeholder="Description"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                      />

                      <label htmlFor="deadline" className="form-label fw-bold">
                      Deadline : 
                    </label>
                      <input
                        type="date"
                        className="form-control mb-3"
                        name="deadline"
                        value={taskData.deadline}
                        onChange={handleChange}
                      />

                       <label htmlFor="status" className="form-label fw-bold">
                      Status : 
                    </label>
                      <select
                        name="status"
                        className="form-control"
                        value={taskData.status}
                        onChange={handleChange}
                      >
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" type="submit">Assign</button>
                     </div>
                  </form>
                </div>
              </div>
            )}

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
