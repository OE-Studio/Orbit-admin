import {createSlice} from '@reduxjs/toolkit'

interface initialStateTypes {
    showVerificationDetails:boolean,
    showCompareView:boolean,
    showImage:boolean,
    image:{
        action?:"",
        source?:{
            img1:"",
            img2:""
        }
    },
    loadingApprove:boolean
}

const initialState:initialStateTypes = {
    showVerificationDetails:false,
    showCompareView:false,
    showImage:false,
    image:{
        action:"",
        source:{
            img1:"",
            img2:""
        }
    },
    loadingApprove:false
}

const Customers = createSlice({
    name:"customers",
    initialState,
    reducers:{
        toggleVerificationDetails:(state)=>{
            state.showVerificationDetails = !state.showVerificationDetails
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
        approveVerification:(state)=>{
            state.loadingApprove = true
            state.loadingApprove = false
        }
    }
})

export const {toggleVerificationDetails, toggleImageDetails, approveVerification} = Customers.actions

export default Customers.reducer