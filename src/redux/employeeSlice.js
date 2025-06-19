import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list : [],
    editIdx : null,
    editData : {},
}


export const employeeSlice = createSlice({
    name:"employeeData",
    initialState,
    reducers:{
        addEmp:(state,action)=>{
            state.list.push(action.payload)
        },
        deleteEmp : (state,action)=>{},
    }
})

export const {addEmp,deleteEmp} = employeeSlice.actions;
export default employeeSlice.reducer