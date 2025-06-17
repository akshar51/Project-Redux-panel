import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employee : []
}

const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers : {
      addEmp : (state,action)=>{},
      deleteEmp : (state,action)=>{},
      editEmp : (state,action)=>{},  
    }
})

export const {addEmp,deleteEmp,editEmp} = employeeSlice.actions;
export default employeeSlice.reducer