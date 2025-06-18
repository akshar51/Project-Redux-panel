import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DataTable from 'react-data-table-component'


const columns = [
	{
		name: 'Sr No.',
		selector: row => row.title,
	},
	{
		name: 'Name',
		selector: row => row.year,
	},
  {
		name: 'Department',
		selector: row => row.year,
	},
  {
		name: 'Salary',
		selector: row => row.year,
	},
  {
		name: 'Bonus',
		selector: row => row.year,
	},
  {
		name: 'HRA',
		selector: row => row.year,
	},
  {
		name: 'DA',
		selector: row => row.year,
	},
  {
		name: 'TA',
		selector: row => row.year,
	},
  {
		name: 'PF',
		selector: row => row.year,
	},
  {
		name: 'PT',
		selector: row => row.year,
	},
  {
		name: 'Tax',
		selector: row => row.year,
	},
  {
		name: 'Tasks',
		selector: row => row.year,
	},
  {
		name: 'Slips',
		selector: row => row.year,
	},
  {
		name: 'Action',
		selector: row => row.year,
	},
];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
]



const Dashboard = () => {
  return (
    <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
  <Sidebar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <Navbar/>
    {/*  Header End */}
    <div className="container-fluid">
      <div className="row gap-3">
        <div className="col-md-4 bg-danger">
        <h1>25</h1>
        <p>Total Employee</p>
      </div>
      <div className="col-md-4 bg-gradient">
        <h1>25</h1>
        <p>Total Task Assigned</p>
      </div>
      </div>

      <div className='my-5'>
        <h1>Employee Data :</h1>
      </div>

      {/* Search start */}
      <div className='mt-5'>
        <input type="text" 
        placeholder='Search employee . . . .'
        className='ms-auto px-3 py-2 rounded bg-transparent border border-1 text-white d-block w-25'/>
      </div>
      {/* Search end */}
      
      {/* Table start */}
      <div className="eTable my-3">
        <DataTable
			columns={columns}
			data={data}
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
  )
}

export default Dashboard
