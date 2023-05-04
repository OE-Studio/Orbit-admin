import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const authSlice = createSlice({
    name:"auth",
    initialState:{user:null, token:null},
    reducers:{
        setUserDetails:(state, {payload})=>{
            state.user = payload.existingAdmin
            state.token = payload.loginToken
        },
        // setToken:(state, {payload})=>{
        //     state.token = payload
        // }
    }
})

export const {setUserDetails} = authSlice.actions

export default authSlice.reducer

export const getUser = (state:RootState)=> state.auth.user

export const getToken = (state:RootState) => state.auth.token