import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface ObjectLiteral {
    [key: string]: any;
}

interface initialState{
    allAirtime:ObjectLiteral[],
    allData:ObjectLiteral[],
    allElectricity:ObjectLiteral[],
    allCable:ObjectLiteral[]
}

export const servicesSlice = createSlice({
    name:"services",
    initialState:{
        allAirtime:[],
        allData:[],
        allElectricity:[],
        allCable:[]
    } as initialState,
    reducers:{}
})


export default servicesSlice.reducer

// export const getAllAirtime = (state)=>state.