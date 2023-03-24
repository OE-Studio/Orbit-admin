import { configureStore } from "@reduxjs/toolkit";
import CustomersReducer from '../slices/CUSTOMERS_SLICE/index'
import CustomerReducer from '../slices/CUSTOMER_SLICE/customerSlice'

export const store = configureStore({
    reducer:{
        customers:CustomersReducer,
        customer:CustomerReducer
    }
})