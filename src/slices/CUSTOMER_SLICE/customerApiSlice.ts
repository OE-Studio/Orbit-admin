import { apiSlice } from "../../pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCustomer:builder.query({
            query:(credentials)=>({
                url:`getUser?token=${token}`,
                method:"GET",
                body:{...credentials}
            })
        }),
        getUserTransactions:builder.query({
            query:()=>``
        })
    })
})

export const {useGetCustomerQuery} = customerApiSlice