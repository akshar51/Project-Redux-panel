import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("employeeList")) || [],
  editIdx: null,
  editData: {},
  error: {},
  search: "",
};

export const employeeSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    addEmp: (state, action) => {
      if (state.editIdx !== null) {
        state.list = state.list.map((item) => {
          if (item.id === state.editIdx) {
            item = action.payload;
          }
          return item;
        });
        state.editIdx = null;
        state.editData = {};
      } else {
        state.list.push({...action.payload,task : []});
      }
    },
    deleteEmp: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setEdit: (state, action) => {
      state.editIdx = action.payload.id;
      state.editData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
    addTask : (state,action)=>{
      const {empId , task} = action.payload;
      const idx = state.list.findIndex(item => item.id === empId)
      if(idx !== -1){
        // const currentEmp = state.list[idx];
      //If there is not array it will create
      // if (!Array.isArray(currentEmp.task)) {
      //   currentEmp.task = [];
      // }
      state.list[idx].task.push({ ...task });
      }  
    },
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEmp, deleteEmp, setEdit, editData, setError, search,addTask,setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
