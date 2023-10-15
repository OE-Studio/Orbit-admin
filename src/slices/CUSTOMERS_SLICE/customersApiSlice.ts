import { apiSlice } from "../../pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const customersApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        allCustomers:builder.query({
            query:()=>`getUsers?token=${token}`
        })
    })
})

export const {useAllCustomersQuery} = customersApiSlice