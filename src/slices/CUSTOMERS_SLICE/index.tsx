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
    loadingApprove:boolean,
    currCustomer:{
        firstName:string,
        lastName:string,
        utilityDoc:string,
        selfieId:string,
        userId:string,
        username:string,
        email:string,
        nin:string
    }
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
    loadingApprove:false,
    currCustomer:{
        firstName:"",
        lastName:"",
        utilityDoc:"",
        selfieId:"",
        userId:"",
        username:"",
        email:"",
        nin:""
    }
}

const Customers = createSlice({
    name:"customers",
    initialState,
    reducers:{
        toggleVerificationDetails:(state, {payload})=>{
            state.showVerificationDetails = !state.showVerificationDetails

            state.currCustomer = payload && Object.keys(payload).length > 0 ? payload : {}
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