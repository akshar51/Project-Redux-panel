import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employee : []
}

const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers : { 
    }
})

export const {addEmp,deleteEmp,editEmp} = employeeSlice.actions;
export default employeeSlice.reducer