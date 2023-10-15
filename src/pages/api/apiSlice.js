import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { useRouter } from 'next/router'

// credentials:'include',
const baseQuery = fetchBaseQuery({
    baseUrl:'https://orbit-finance-api.herokuapp.com/admin/api/v1/admin/'
    // prepareHeaders:(headers, {getState})=>{
    //     const token = getState().auth.token
    //     if(token){
    //         headers.set("authorization", `Bearer ${token}`)
    //     }

    //     return headers
    // }
})

const baseQueryWithReAuth = async(args, api, extraOptions)=>{
    let result =  await baseQuery(args, api, extraOptions)

    // const router = useRouter()

    if(result?.error?.status === 401){
        
        console.log('Sending refresh Token')

        const refreshResult = await baseQuery("/refresh", api, extraOptions)

        if(refreshResult?.data){
            const user = api.getState().auth.user
            // Store the new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        }
        else {
            console.log("unauthorizwed")
            // router.replace("/")
            api.dispatch(logout())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReAuth,
    endpoints:builder=>({})
})