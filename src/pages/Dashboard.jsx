import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp,setEdit,search } from "../redux/employeeSlice";
import { useNavigate } from "react-router";



const Dashboard = () => {
  const columns = [
  {
    name: "Sr No.",
    selector: (row, index) => index + 1,
    width: "80px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    width : "150px"
  },
  {
    name: "Department",
    selector: (row) => row.department,
    width:"150px"
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
  },
  {
    name: "Bonus",
    selector: (row) => row.bonus,
  },
  {
    name: "HRA",
    selector: (row) => row.hra,
  },
  {
    name: "DA",
    selector: (row) => row.da,
  },
  {
    name: "TA",
    selector: (row) => row.ta,
  },
  {
    name: "PF",
    selector: (row) => row.pf,
  },
  {
    name: "PT",
    selector: (row) => row.pt,
  },
  {
    name: "Tax",
    selector: (row) => row.tax,
  },
  // {
  //   name: "Tasks",
  //   selector: (row) => row.task,
  //   width : "150px"
  // },

  {
    name: "Action",
    cell: (row) => {
      return (
        <>
          <div className="d-flex justify-content-start align-items-center gap-2">
            <button className="btn btn-warning me-2" onClick={()=>handleEdit(row)}>Edit</button>
            <button className="btn btn-danger" onClick={()=>handleDelete(row.id)}>Delete</button>
          </div>
        </>
      )
    },
    width : "200px"
  },
];

  const list = useSelector((state) => state.employeeData.list);
  const searchValue = useSelector(state=> state.employeeData.search)
  console.log(list)
  const filterList = list.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))


  const dispatch = useDispatch()
  const navi = useNavigate();


  function handleDelete(id){
    dispatch(deleteEmp(id))
  }

  function handleEdit(id){
    dispatch(setEdit(id))
    navi("/form")
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
          <div className="container-fluid">
            <div className="row gap-3">
              <div className="col-md-4 bg-danger">
                <h1 className="ps-2">{list.length}</h1>
                <p>Total Employee</p>
              </div>
              <div className="col-md-4 bg-gradient">
                <h1 className="ps-2">25</h1>
                <p>Total Task Assigned</p>
              </div>
            </div>

            <div className="my-5">
              <h1>Employee Data :</h1>
            </div>

            {/* Search start */}
            <div className="mt-5">
              <input
                type="text"
                placeholder="Search employee . . . ."
                className="ms-auto px-3 py-2 rounded bg-transparent border border-1 text-white d-block w-25"
                onChange={(e)=>dispatch(search(e.target.value))}
                value={searchValue}
              />
            </div>
            {/* Search end */}

            {/* Table start */}
            <div className="eTable my-3 rounded" style={{ overflowX: "auto" }}>
              <DataTable
                columns={columns}
                data={filterList}
                selectableRows
                pagination
                highlightOnHover
                pointerOnHover
                responsive
                fixedHeader
                fixedHeaderScrollHeight="300px"
              />
            </div>
            {/* Table end */}

            {/* Footer start  */}
            {/* <Footer/> */}
            {/* Footer end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
