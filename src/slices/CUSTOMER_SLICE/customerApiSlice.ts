import { apiSlice } from "../../pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCustomer:builder.query({
            query:()=>`get`
        }),
        getUserTransactions:builder.query({
            query:()=>``
        })
    })
})