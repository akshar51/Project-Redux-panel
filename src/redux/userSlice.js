import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : []
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : { 
    }
})

// export const {addEmp,deleteEmp,editEmp} = userSlice.actions;
export default userSlice.reducer