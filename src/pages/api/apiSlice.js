import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

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

    if(result?.error?.originalStatus === 401){
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
            api.dispatch(logout())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReAuth,
    endpoints:builder=>({})
})