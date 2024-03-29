import React, {useState, ChangeEvent, useEffect, FormEvent} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewDataMutation, useEditProductMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { NotificationContext } from "@/layouts/DASHBOARD_LAYOUT";
import { ProductContext } from "@/containers/SERVICES";
import { isEmpty } from "@/utils";
import { SwitchToggle } from "@/components/SWITCH";

const dataObj = {
    name:"",
    description:"",
    plan_type:"",
    provider_name:"",
    provider_id:"",
    validity:"",
    cost_price:0,
    selling_price:0,
    product_id:"",
    status:"active"
}

const NewData = () =>{
    const {toggleNotification} = useContext(NotificationContext)
    const [values, setValues] = useState(dataObj)

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setValues(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const {mode, product_type, product} = useContext(ProductContext)

     useEffect(()=>{
        if (mode==='edit' && product_type === 'data'){
            setValues({...product})
        }
        
     },[mode, product])

    let [newData, {isLoading, isSuccess}] = useNewDataMutation()

    const createData = async (e:FormEvent) =>{
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
            let datas = await newData(values).unwrap()
            let result = await datas
            if(result.success){
                setValues(dataObj)
                toggleNotification({showNotification:true,
                    title:"Data Plan Created",
                    text:result.message,
                    status:"success"})
            }
            else throw new Error(result)
        }
        catch(err:any){
            toggleNotification({showNotification:true,
                title:"Data Plan Failed",
                text:err.data.message,
                status:"failed"})
        }
    }

    let [editProduct, {isLoading:loadingEdit}] = useEditProductMutation()

    const editFunction = async(values:any) =>{
        try{
            let editAirtime = editProduct({...values, model:'data'}).unwrap()
            let result = await editAirtime
            if(result.success){
                console.log(result)
                toggleNotification({showNotification:true,
                    title:"Data Plan Updated",
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

    const editHandler = async (e:any) =>{
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
            <form action="">
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
                label="Plan type" 
                required={true} 
                name="plan_type"
                className="mt-4"
                value={values.plan_type}
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
                onClick={mode === 'edit' ? editHandler :createData}>
                {isLoading || loadingEdit ? "Loading..." : `${mode === 'edit' ? 'Edit' : 'Create'}`}
            </button>
            </form>
        </div>
    )
}

export default NewData

// product_id: DataTypes.STRING,
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//     cost_price: DataTypes.DOUBLE,
//     selling_price: DataTypes.DOUBLE,
//     validity: DataTypes.STRING,
//     plan_type: DataTypes.STRING,
//     provider_id: DataTypes.STRING,
//     provider_name: DataTypes.STRING,
//     status: {
//       type: DataTypes.ENUM('active', 'inactive'),
//       defaultValue: 'active'
//     },
//     value: DataTypes.STRING