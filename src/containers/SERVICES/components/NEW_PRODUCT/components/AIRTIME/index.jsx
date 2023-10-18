import React, {useState, useEffect} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewAirtimeMutation, useEditProductMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ProductContext } from "@/containers/SERVICES";
import { NotificationContext } from "@/layouts/DASHBOARD_LAYOUT";
import { updateAirtime } from "@/slices/SERVICES_SLICE/servicesApiSlice";


const airtimeObj = {
    name:"",
    description:"",
    airtime_type:"",
    provider_name:"",
    provider_id:"",
    validity:"",
    cost_price:0,
    selling_price:0,
    product_id:""
}

const NewAirtime = () =>{
    const [values, setValues] = useState(airtimeObj)
    const {toggleNotification} = useContext(NotificationContext)
    const dispatch = useDispatch()
    
    const changeHandler = (e) =>{
        // console.log(e.target.value)
        setValues(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const {mode, product_type, product} = useContext(ProductContext)
     useEffect(()=>{
        if (mode==='edit' && product_type === 'airtime'){
            setValues({...product})
        }
     },[mode])

    let [newAirtime, {isLoading, isSuccess}] = useNewAirtimeMutation()

    const createAirtime = async(e)=>{
        e.preventDefault()
        try{
            let airtime = newAirtime(values).unwrap()
            let result = await airtime
            
            if(result.success){
                setValues(airtimeObj)
                toggleNotification({showNotification:true,
                    title:"Airtime Plan Created",
                    text:result.message,
                    status:"success"}
                )
                // dispatch(updateAirtime([result.createProduct]))
                // console.log(result.createProduct)
                
            }
            else{
                throw new Error(result.message)
            }
        }
        catch(err){
            console.log(err)
            // toggleNotification({showNotification:true,
            //     title:"Airtime Plan Failed",
            //     text:err.data.message,
            //     status:"failed"})
        }
    }

    let [editProduct, {isLoading:loadingEdit}] = useEditProductMutation()

    const editHandler = async (e) =>{
        e.preventDefault()
        try{
            let editAirtime = editProduct({...values, model:'airtime'}).unwrap()
            let result = await editAirtime
            if(result.success){
                toggleNotification({showNotification:true,
                    title:"Airtime Plan Updated",
                    text:result.message,
                    status:"success"})
            }
        }
        catch(err){
            toggleNotification({showNotification:true,
                title:"Airtime Plan Update Failed",
                text:err.data.message,
                status:"failed"})
        }
    }

    return (
        <div>
            <form action="">
            <Input 
                label="Name" 
                required={true} 
                name="name"
                className="mt-4"
                value={values.name}
                onChange={changeHandler}
            />
            <Input 
                label="Description" 
                required={true} 
                name="description"
                className="mt-4"
                value={values.description}
                onChange={changeHandler}
            />
            <Input 
                label="Product ID" 
                required={true} 
                name="product_id"
                className="mt-4"
                value={values.product_id}
                onChange={changeHandler}
            />
            <Input 
                label="Airtime type" 
                required={true} 
                name="airtime_type"
                className="mt-4"
                value={values.airtime_type}
                onChange={changeHandler}
            />
            <Input 
                label="Provider Name" 
                required={true} 
                name="provider_name"
                className="mt-4"
                value={values.provider_name}
                onChange={changeHandler}
            />
            <Input 
                label="Provider ID" 
                required={true} 
                name="provider_id"
                className="mt-4"
                value={values.provider_id}
                onChange={changeHandler}
            />
            <Input 
                label="Validity" 
                required={true} 
                name="validity"
                className="mt-4"
                value={values.validity}
                onChange={changeHandler}
            />

            <div className="flex items-center justify-between gap-4">
                <Input 
                    label="Cost Price" 
                    required={true} 
                    name="cost_price"
                    className="mt-4"
                    value={values.cost_price}
                    onChange={changeHandler}
                />
                <Input 
                    label="Selling Price" 
                    required={true} 
                    name="selling_price"
                    className="mt-4"
                    value={values.selling_price}
                    onChange={changeHandler}
                />
            </div>

            <button
                className="btn-black rounded-lg h-11 flex items-center justify-center gap-2 w-full mt-6 font-semibold text-base"
                onClick={mode === 'edit' ? editHandler :createAirtime}>
                {isLoading || loadingEdit ? "Loading..." : `${mode === 'edit' ? 'Edit' : 'Create'}`}
            </button>
            </form>
        </div>
    )
}

export default NewAirtime