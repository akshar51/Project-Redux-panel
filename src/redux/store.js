import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import employeeDataReducer from '../redux/employeeSlice';


export const store = configureStore({
   reducer : {
        user : userReducer,
        employeeData : employeeDataReducer,
   }
})