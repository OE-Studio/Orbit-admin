import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showTransaction:false,
    showImage:false,
    image:{
        action:"",
        source:{
            img1:"",
            img2:""
        }
    },
    showFlag:false,
    showSuspend:false,
    showFlagHistory:false,
    showSuspendHistory:false
}

const customer = createSlice({
    name:"customer slice",
    initialState,
    reducers:{
        toggleTransactionDetails:(state, {payload})=>{
            state.showTransaction = !state.showTransaction
        },
        toggleImageDetails:(state, {payload})=>{  
            if(payload === null || payload === undefined) {
                state.image = {
                    action:"",
                    source:{
                        img1:"",
                        img2:""
                    }
                }
                state.showImage = false
            }
            else{
                state.image = payload
                state.showImage = true
            }
        },
        toggleFlagDrawer:(state)=>{
            state.showFlag = !state.showFlag
        },
        toggleSuspendDrawer:(state)=>{
            state.showSuspend = !state.showSuspend
        },
        toggleFlagHistoryDrawer:(state)=>{
            state.showFlagHistory = !state.showFlagHistory
        },
        toggleSuspendHistoryDrawer:(state)=>{
            state.showSuspendHistory = !state.showSuspendHistory
        }
    },
    extraReducers:{}
})

export const {toggleTransactionDetails, toggleImageDetails, toggleFlagDrawer, toggleSuspendDrawer, toggleFlagHistoryDrawer, toggleSuspendHistoryDrawer} = customer.actions

export default customer.reducer