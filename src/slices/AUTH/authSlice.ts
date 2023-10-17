import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const checkLocalToken = ()=>{
    let token
    if(typeof window !== 'undefined'){
        token = sessionStorage.getItem('orbToken') ? sessionStorage.getItem('orbToken') : null  
    }
    return token
}

const checkLocalUser = () =>{
    let user

    if(typeof window !== 'undefined'){
        user = sessionStorage.getItem('orbadm') ? JSON.parse(sessionStorage.getItem('orbadm') || '{}') : {
            firstName:"",
            lastName:"",
            utilityDoc:"",
            selfieId:"",
            userId:"",
            username:"",
            email:"",
            nin:"",
            role:""
        } 
    }
    return user
}

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:checkLocalUser(), 
        token:checkLocalToken()
    },
    reducers:{
        setUserDetails:(state, {payload})=>{
            state.user = payload.existingAdmin
            state.token = payload.loginToken

            sessionStorage.setItem("orbadm", JSON.stringify(payload.existingAdmin))
            sessionStorage.setItem("orbToken", payload.loginToken)
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