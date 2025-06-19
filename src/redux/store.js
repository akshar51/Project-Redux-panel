import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from '../redux/userSlice';
import employeeDataReducer from '../redux/employeeSlice';

export const store = configureStore({
   reducer : {
        employee : employeeReducer,
        employeeData : employeeDataReducer,
   }
})