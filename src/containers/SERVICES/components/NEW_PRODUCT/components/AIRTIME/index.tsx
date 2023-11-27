import React, {useState, useEffect, ChangeEvent, FormEvent} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewAirtimeMutation, useEditProductMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ProductContext } from "@/containers/SERVICES";
import { NotificationContext } from "@/layouts/DASHBOARD_LAYOUT";
// import { updateAirtime } from "@/slices/SERVICES_SLICE/servicesApiSlice";
import { isEmpty } from "@/utils";
import { SwitchToggle } from "@/components/SWITCH";


const airtimeObj = {
    name:"",
    description:"",
    airtime_type:"",
    provider_name:"",
    provider_id:"",
    validity:"",
    cost_price:0,
    selling_price:0,
    product_id:"",
    status:"active"
}

const NewAirtime = () =>{
    const [values, setValues] = useState(airtimeObj)
    const {toggleNotification} = useContext(NotificationContext)
    const dispatch = useDispatch()
    
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
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

    const createAirtime = async(e:FormEvent)=>{
        e.preventDefault()
        if(isEmpty(values)){
            console.log(values)
            toggleNotification({showNotification:true,
                title:"Input Error",
                text:"Please ensure all fields are filled",
                status:"failed"}
            )

            return false
        }
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
            }
            else{
                throw new Error(result.message)
            }
        }
        catch(err:any){
            console.log(err)
            toggleNotification({showNotification:true,
                title:"Airtime Plan Failed",
                text:err.message,
                status:"failed"})
        }
    }

    let [editProduct, {isLoading:loadingEdit}] = useEditProductMutation()

    const editFunction = async(values:any)=>{
        try{
            let editAirtime = editProduct({...values, model:'airtime'}).unwrap()
            let result = await editAirtime
            if(result.success){
                console.log(result)
                toggleNotification({showNotification:true,
                    title:"Airtime Plan Updated",
                    text:result.message,
                    status:"success"})
            }

            else throw new Error(result.message)
        }
        catch(err:any){
            toggleNotification({showNotification:true,
                title:"Airtime Plan Update Failed",
                text:err.message,
                status:"failed"})
        }
    }

    const editHandler = async (e:FormEvent) =>{
        e.preventDefault()
        editFunction(values)
    }

    const updateStatus = (e:ChangeEvent) =>{
        // console.log(e.target.checked)
        const target = e.target as HTMLInputElement
        if(target.checked){
            setValues(value=>{
                return {...value, [target.name]:'active'}
            })
            editFunction({...values, [target.name]:'active'})
        }
        else{
            setValues(value=>{
                return {...value, [target.name]:'inactive'}
            })
            // console.log(values)
            editFunction({...values, [target.name]:'inactive'})
        }
    }

    return (
        <div>
            <form action="" onSubmit={mode === 'edit' ? editHandler : createAirtime}>
            {mode==='edit' ? 
                <div className="flex items-center justify-between">
                    <p>Status</p>
                    <div className="flex items-center gap-1">
                        <SwitchToggle
                            defaultChecked={values.status === 'active'}
                            onChange={updateStatus}
                            name="status"
                        />
                        <div className="w-16">{values.status}</div>
                    </div>
                </div> : 
            " "}
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

            <input
                className="btn-black rounded-lg h-11 flex items-center justify-center gap-2 w-full mt-6 font-semibold text-base"
                value={isLoading || loadingEdit ? "Loading..." : `${mode === 'edit' ? 'Edit' : 'Create'}`}
                type="submit"
            />
            </form>
        </div>
    )
}

export default NewAirtime