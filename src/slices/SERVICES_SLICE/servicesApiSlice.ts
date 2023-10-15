import { apiSlice } from "../../pages/api/apiSlice";
import { store } from "@/store";

const {token} = store.getState().auth

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        newAirtime:builder.mutation({
            query:credentials=>({
                url:`airtime_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            })
        }),
        newData:builder.mutation({
            query:credentials=>({
                url:`data_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            })
        }),
        newCable:builder.mutation({
            query:credentials=>({
                url:`cable_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            })
        }),
        newElectricity:builder.mutation({
            query:credentials=>({
                url:`electricity_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            })
        }),
        getAirtime:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/airtime`
        }),
        getData:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/data`
        }),
        getElectricity:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/electricity`
        }),
        getCable:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/cable`
        })
    })
})

export const {
    useNewAirtimeMutation, 
    useNewDataMutation, 
    useNewCableMutation, 
    useNewElectricityMutation, 
    useGetAirtimeQuery, 
    useGetDataQuery, 
    useGetElectricityQuery, 
    useGetCableQuery} = servicesApiSlice