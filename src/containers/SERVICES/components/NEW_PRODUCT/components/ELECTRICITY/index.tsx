import React, {useState, ChangeEvent, useEffect, FormEvent} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewElectricityMutation, useEditProductMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { NotificationContext } from "@/layouts/DASHBOARD_LAYOUT";
import { ProductContext } from "@/containers/SERVICES";
import { isEmpty } from "@/utils";
import { SwitchToggle } from "@/components/SWITCH";

const electricityObj = {
    name:"",
    description:"",
    plan_type:"",
    provider_name:"",
    provider_id:"",
    validity:"",
    cost_price:0,
    selling_price:0,
    product_id:"",
    status:"active",
    state:"",
    meter_type:""
}

const NewElectricity = () =>{
    const [values, setValues] = useState(electricityObj)
    const {toggleNotification} = useContext(NotificationContext)

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setValues(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const {mode, product_type, product} = useContext(ProductContext)

     useEffect(()=>{
        if (mode==='edit' && product_type === 'electricity'){
            setValues({...product})
        }
        
     },[mode, product])

    const [newElectricity, {isLoading}] = useNewElectricityMutation()

    const createElectricity = async (e:FormEvent) =>{
        e.preventDefault()
        if(isEmpty(values)){
            toggleNotification({showNotification:true,
                title:"Input Error",
                text:"Please ensure all fields are filled",
                status:"failed"}
            )

            return false
        }
        try{
            let electricity = newElectricity(values).unwrap()
            let result = await electricity

            if(result.success){
                setValues(electricityObj)
                toggleNotification({showNotification:true,
                    title:"Electricity Plan Created",
                    text:result.message,
                    status:"success"})
            }
            else throw new Error(result)
        }
        catch(err:any){
            toggleNotification({showNotification:true,
                title:"Electricity Plan Failed",
                text:err.data.message,
                status:"failed"})
        }
    }

    let [editProduct, {isLoading:loadingEdit}] = useEditProductMutation()

    const editFunction = async(values:any)=>{
        try{
            let editAirtime = editProduct({...values, model:'electricity'}).unwrap()
            let result = await editAirtime
            if(result.success){
                toggleNotification({showNotification:true,
                    title:"Electricity Plan Updated",
                    text:result.message,
                    status:"success"})
            }
            else throw new Error(result.message)
        }
        catch(err:any){
            console.log({err})
            toggleNotification({showNotification:true,
                title:"Electricity Plan Update Failed",
                text:err.message,
                status:"failed"})
        }
    }

    const editHandler = async (e:any) =>{
        e.preventDefault()
        editFunction(values)
    }

    const updateStatus = (e:ChangeEvent)=>{
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
            <form action="" onSubmit={mode === 'edit' ? editHandler :createElectricity}>
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
                label="Plan type" 
                required={true} 
                name="plan_type"
                className="mt-4"
                value={values.plan_type}
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
                label="Meter Type" 
                required={true} 
                name="meter_type"
                className="mt-4"
                value={values.meter_type}
                onChange={changeHandler}
            />
            <Input 
                label="State" 
                required={true} 
                name="state"
                className="mt-4"
                value={values.state}
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

            <Input 
                label="Status" 
                required={true} 
                name="status"
                className="mt-4"
                value={values.status}
                onChange={changeHandler}
            />

            <input
                type="submit"
                className="btn-black rounded-lg h-11 flex items-center justify-center gap-2 w-full mt-6 font-semibold text-base"
                value={isLoading || loadingEdit ? "Loading..." : `${mode === 'edit' ? 'Edit' : 'Create'}`}
            />
            </form>
        </div>
    )
}

export default NewElectricity

//     status: {
//       type: DataTypes.ENUM('active', 'inactive'),
//       defaultValue: 'active'
//     },
//     value: DataTypes.STRING,