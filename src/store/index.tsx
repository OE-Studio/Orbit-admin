import { configureStore } from "@reduxjs/toolkit";
import CustomersReducer from '../slices/CUSTOMERS_SLICE/index'
import CustomerReducer from '../slices/CUSTOMER_SLICE/index'
import AuthReducer from "@/slices/AUTH/authSlice";
import { apiSlice } from "@/pages/api/apiSlice";
import VerificationReducer from '@/slices/VERIFICATON/verificationSlice'
import ServicesReducer from '@/slices/SERVICES_SLICE/servicesSlice'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:AuthReducer,
        customers:CustomersReducer,
        customer:CustomerReducer,
        verification:VerificationReducer,
        products:ServicesReducer
    },
    middleware:getDefaultMiddleware=>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>