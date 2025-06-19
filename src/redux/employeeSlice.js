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

            if(state.editIdx !== null){
                state.list = state.list.map((item)=>{
                    if(item.id === state.editIdx){
                        item = action.payload
                    }
                    return item;
                })
                state.editIdx = null;
                state.editData = {}
            }
            else{
                state.list.push(action.payload)
            }

        },
        deleteEmp : (state,action)=>{
            state.list = state.list.filter(item=>item.id !== action.payload)
        },
        setEdit : (state,action)=>{
            state.editIdx = action.payload.id
            state.editData = action.payload
        },
    }
})

export const {addEmp,deleteEmp,setEdit,editData} = employeeSlice.actions;
export default employeeSlice.reducer