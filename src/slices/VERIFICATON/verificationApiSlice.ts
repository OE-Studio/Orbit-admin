import { apiSlice } from "@/pages/api/apiSlice";
import { store } from "@/store";

const token = store.getState().auth.token

export const verificationApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getRequests:builder.query({
            query:()=>`getKYCrequests?token=${token}`
        })
    })
})

export const {useGetRequestsQuery} = verificationApiSlice