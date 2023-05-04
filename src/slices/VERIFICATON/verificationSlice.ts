import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const verificationSlice = createSlice({
    name:'verification',
    initialState:{awaitingVerification:[]},
    reducers:{
        setAwaitingVerification:(state, {payload})=>{
            state.awaitingVerification = payload
        }
    }
})

export const {setAwaitingVerification} = verificationSlice.actions

export default verificationSlice.reducer

export const getAwaiting = (state:RootState) =>state.verification.awaitingVerification