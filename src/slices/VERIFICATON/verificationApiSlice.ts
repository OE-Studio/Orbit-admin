import { apiSlice } from "@/pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const verificationApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getRequests:builder.query({
            query:()=>`getKYCrequests?token=${token}`
        }),
        approveKYCRequest:builder.mutation({
            query:credentials=>({
                url:`approveKYC/${credentials}?token=${token}`,
                method:"POST"
            })
        }),
        rejectKYCRequest:builder.mutation({
            query:credentials=>({
                url:`rejectKYC/${credentials}?token=${token}`,
                method:"POST"
            })
        })
    })
})

export const {useGetRequestsQuery, useApproveKYCRequestMutation, useRejectKYCRequestMutation} = verificationApiSlice