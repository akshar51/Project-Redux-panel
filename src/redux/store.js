import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from '../redux/userSlice';

export const store = configureStore({
   reducer : {
        employee : employeeReducer
   }
})