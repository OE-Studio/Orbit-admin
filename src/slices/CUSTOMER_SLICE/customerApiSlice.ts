import { apiSlice } from "../../pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCustomer:builder.query({
            query:(id)=>`getUsers/${id}?token=${token}`
        }),
        getUserTransactions:builder.query({
            query:(id)=>`getTransactions/${id}?token=${token}`
        }),
        disableUser:builder.mutation({
            query:(id)=>({
                url:`blockUser/${id}/false?token=${token}`,
                method:'PUT'  
            })

        })
    })
})

export const {useGetCustomerQuery, useDisableUserMutation, useGetUserTransactionsQuery} = customerApiSlice