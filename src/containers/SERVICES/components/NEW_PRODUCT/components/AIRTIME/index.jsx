import React, {useState, ChangeEvent} from "react";
import Input from "../../../../../../components/INPUT";
import {useNewAirtimeMutation} from "@/slices/SERVICES_SLICE/servicesApiSlice"
import { useDispatch } from "react-redux";


const NewAirtime = () =>{
    const [values, setValues] = useState({
        name:"",
        description:"",
        airtime_type:"",
        provider_name:"",
        provider_id:"",
        validity:"",
        cost_price:0,
        selling_price:0,
        product_id:""
    })
    const changeHandler = (e) =>{
        setValues(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    let [newAirtime, {isLoading, isSuccess}] = useNewAirtimeMutation()

    const createAirtime = async(e)=>{
        e.preventDefault()
        try{
            let airtime = newAirtime(values).unwrap()
            let result = await airtime
            console.log(result)
        }
        catch(err){
            
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
                onClick={createAirtime}>
                {isLoading ? "Loading..." : "Create"}
            </button>
            </form>
        </div>
    )
}

export default NewAirtime