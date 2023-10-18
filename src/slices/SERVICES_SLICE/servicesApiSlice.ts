import { MdDrafts } from "react-icons/md";
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
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:newAirtime} = await queryFulfilled;
                    
                    dispatch(servicesApiSlice.util.updateQueryData('getAirtime',null,(draft)=>{
                        return [...draft, newAirtime.createProduct]
                    }))
                }
                catch{}
            }
        }),
        newData:builder.mutation({
            query:credentials=>({
                url:`data_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:newData} = await queryFulfilled;
                    
                    dispatch(servicesApiSlice.util.updateQueryData('getData', null, (draft)=>{
                        return [...draft, newData.createProduct]

                    }))
                }
                catch{}
            }
        }),
        newCable:builder.mutation({
            query:credentials=>({
                url:`cable_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:newCable} = await queryFulfilled;
                    
                    dispatch(servicesApiSlice.util.updateQueryData('getCable', null, (draft)=>{
                        return [...draft, newCable.createProduct]
                    }))
                }
                catch{}
            }
        }),
        newElectricity:builder.mutation({
            query:credentials=>({
                url:`electricity_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:newElectricity} = await queryFulfilled;
                    
                    dispatch(servicesApiSlice.util.updateQueryData('getElectricity', null, (draft)=>{
                        return [...draft, newElectricity.createProduct]
                    }))
                }
                catch{}
            }
        }),
        getAirtime:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/airtime`
        }),
        getData:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/data`,
            transformResponse:(response:any)=>response.dataProducts
        }),
        getElectricity:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/electricity`,
            transformResponse:(response:any)=>response.electricityProducts
        }),
        getCable:builder.query({
            query:()=>`https://orbit-finance-api.herokuapp.com/admin/api/v1/products/cable`,
            transformResponse:(response:any)=>response.cableProducts
        }),
        editProduct:builder.mutation({
            query:credentials=>({
                url:`edit_products?token=${token}`,
                method:'POST',
                body:{...credentials}
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:updatedProduct} = await queryFulfilled;

                    let {model, ...values} = args

                    if(model === 'airtime') {
                        dispatch(servicesApiSlice.util.updateQueryData('getAirtime', null, (draft)=>{
                            return draft?.map((airtime:any)=>{
                                if (airtime.product_id === values.product_id){
                                    return values
                                }
                                return airtime
                            })
                        }))
                    }
                    else if(model === 'data'){
                        dispatch(servicesApiSlice.util.updateQueryData('getData', null, (draft)=>{
                            return draft?.map((data:any)=>{
                                if (data.product_id === values.product_id){
                                    return values
                                }
                                return data
                            })
                        }))
                    }
                    else if(model === 'cable'){
                        dispatch(servicesApiSlice.util.updateQueryData('getCable', null, (draft)=>{
                            return draft?.map((cable:any)=>{
                                if (cable.product_id === values.product_id){
                                    return values
                                }
                                return cable
                            })
                        }))
                    }
                    else if(model === 'electricity'){
                        dispatch(servicesApiSlice.util.updateQueryData('getElectricity', null, (draft)=>{
                            return draft?.map((electricity:any)=>{
                                if (electricity.product_id === values.product_id){
                                    return values
                                }
                                return electricity
                            })
                        }))
                    }
                }
                catch{}
            }
        }),
        deleteProduct:builder.mutation({
            query:credentials=>({
                url:`product?token=${token}`,
                method:'DELETE',
                body:{...credentials}
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data:deletedProduct} = await queryFulfilled;

                    let {model, product_id} = args

                    if(model === 'airtime') {
                        dispatch(servicesApiSlice.util.updateQueryData('getAirtime', null, (draft)=>{
                            return draft?.filter((airtime:any)=>airtime.product_id !== product_id)
                        }))
                    }
                    else if(model === 'data'){
                        dispatch(servicesApiSlice.util.updateQueryData('getData', null, (draft)=>{
                            return draft?.filter((datas:any)=>datas.product_id !== product_id)
                        }))
                    }
                    else if(model === 'cable'){
                        dispatch(servicesApiSlice.util.updateQueryData('getCable', null, (draft)=>{
                            return draft?.filter((cable:any)=>cable.product_id !== product_id)
                        }))
                    }
                    else if(model === 'electricity'){
                        dispatch(servicesApiSlice.util.updateQueryData('getElectricity', null, (draft)=>{
                            return draft?.filter((electricity:any)=>electricity.product_id !== product_id)
                        }))
                    }
                }
                catch{}
            }
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
    useGetCableQuery, 
    useEditProductMutation,
    useDeleteProductMutation
} = servicesApiSlice